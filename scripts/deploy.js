'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

function dockerBuild() {
  exec(`cd ${__dirname}/../ && docker build -t 'semiprofe:latest' api`, function (error, stdout, stderr) {
    if (stderr) {
      console.log(stderr);
    }

    if (error) {
      console.log(`Could not create docker image. Error: \n ${error}`);
      process.exit(0);
    }

    console.log('Docker image created successfully!');
    console.log('Trying to run application in docker container...');
    dockerRun(true);
  });
}

function dockerRun(secondTry) {
  exec(`cd ${__dirname}/../api/ && docker run --restart always --name semiprofe -d -p 3000:3000 semiprofe:latest`, function (error, stdout, stderr) {
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }

    if (error) {
      console.log(`Error: ${error}`);
      if (!secondTry) {
        console.log('Trying to create a new docker image...');
        dockerBuild();
      }
    } else {
      console.log('Docker started backend application successfully!');
      process.exit(0);
    }
  });
}

function createDockerfile() {
  fs.readFile(`${__dirname}/../api/build.gradle`, 'utf8', function (err, data) {
    if (err) {
      process.exit(1);
    }

    const versionIndex = data.indexOf('version');
    let version = data.substring(versionIndex + 8);
    const from = version.indexOf('\'');
    version = version.slice(from + 1);
    const to = version.indexOf('\'');
    version = version.substring(0, to);

    const dockerfile = `FROM openjdk:8-jdk-alpine\nVOLUME /tmp\nADD build/libs/semiprofe-${version}.jar app.jar\nENV JAVA_OPTS=""\nENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar\n`;

    fs.writeFile(`/${__dirname}/../api/Dockerfile`, dockerfile, function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log('File created successfully!');

      console.log('Executing gradle build');
      exec(`cd ${__dirname}/../api/ && ./gradlew build`, function (error, stdout, stderr) {
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }

        if (error) {
          console.log(`error: ${error}`);
          process.exit(1);
        }

        console.log('Gradle build was successful!');
        dockerRun();
      });
    });
  });
}

function main() {
  if (!process.argv) {
    console.log('The option --password is missing.');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  if (args.indexOf('--password') === -1 || args.indexOf('--db') === -1) {
    console.log('The options --password and --db are required.');
    process.exit(1);
  }

  const usernameIndex = args.indexOf('--username');
  const username = usernameIndex > -1 ? args[usernameIndex + 1] : 'dev';
  const password = args[args.indexOf('--password') + 1];
  const dbUrl = args[args.indexOf('--db') + 1];

  const applicationProperties = `spring.jpa.hibernate.ddl-auto=update\nspring.datasource.url=jdbc:mysql://${dbUrl}\nspring.datasource.username=${username}\norg.hibernate.SQL=debug\nspring.datasource.password=${password}\nserver.port = 3000\nlogging.level.org.springframework.web=DEBUG`;

  console.log('Creating application.properties... ');
  fs.writeFile(`${__dirname}/../api/src/main/resources/application.properties`, applicationProperties, function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    createDockerfile();
    console.log('File created successfully!');
  });
}

main();

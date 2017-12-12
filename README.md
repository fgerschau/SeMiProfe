# Se mi profe
---

For deploying the application you need:

 * Docker and a running docker daemon
 * NodeJS
 * npm (Node package manager)
 * [PM2](http://pm2.keymetrics.io/)


### Backend
1. In the project's root you have to run
```bash
	node scripts/deploy.js
    	--username		[the username of your mysql database, the default value is 'dev']
        --password		[your mysql password, required]
        --db			[your mysql url (including portnumber)]
```

### Frontend
In `web-client/`:
1. `npm install`
2. `pm2 start app --name semiprofe`
---

##### If something fails:
To clear containers:

`docker rm -f $(docker ps -a -q)`

To clear images:

`docker rmi -f $(docker images -a -q)`

To stop the node process: 

`pm2 delete semiprofe`

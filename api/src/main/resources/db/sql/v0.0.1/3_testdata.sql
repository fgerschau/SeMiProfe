CREATE PROCEDURE populate()
  BEGIN
    DECLARE i int DEFAULT 0;
    DECLARE teacher BIT(1) DEFAULT 1;
    DECLARE lang VARCHAR(5) DEFAULT 'es-ES';
    WHILE i < 300 DO
      IF (MOD(i, 3) = 0)
      THEN SET teacher := 0;
      ELSE SET teacher := 1;
      END IF;
      IF (MOD(i, 2) = 0)
      THEN SET lang := 'en-GB';
      ELSE SET lang := 'es-ES';
      END IF;
      SET i = i + 1;
      INSERT INTO user (id, first_name, last_name, is_teacher, language, email, password) VALUES (i, CONCAT('FNAME', i), CONCAT('LNAME', i), teacher, lang, CONCAT('fname', i, '@prueba.com'), '$2a$08$fCW4E/.FD7.uoyRALBqJNeM0pqrpehnzZREwU86KdrUkQfMrxDmIi');
    END WHILE;
  END;

CALL populate();

DROP PROCEDURE populate;
CREATE PROCEDURE populate()
BEGIN
  DECLARE i int DEFAULT 0;
  WHILE i <= 300 DO
    SET i = i + 1;
    INSERT INTO user (id, first_name, last_name) VALUES (i, CONCAT('FNAME', i), CONCAT('LNAME', i));
  END WHILE;
END;

CALL populate();

DROP PROCEDURE populate;
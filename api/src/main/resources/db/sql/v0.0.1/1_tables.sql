DROP TABLE IF EXISTS teacher;

CREATE TABLE teacher (
  id serial NOT NULL PRIMARY KEY,
  first_name NVARCHAR(60),
  last_name NVARCHAR(60)
);
DROP TABLE IF EXISTS receiver;
CREATE TABLE receiver (
  id serial NOT NULL PRIMARY KEY,
  first_name NVARCHAR(60),
  last_name NVARCHAR(60),
  is_teacher BOOLEAN,
  'language' NVARCHAR(5)
);


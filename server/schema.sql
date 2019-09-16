-- //refactoring to postgres
CREATE TABLE IF NOT EXISTS propertyListings (
  id SERIAL NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL NOT NULL,
  src VARCHAR(420) NOT NULL,
  property_description VARCHAR(150),
  propertyListing_id INT,
  FOREIGN KEY (propertyListing_id)
  REFERENCES propertyListings(id)
  ON DELETE CASCADE, PRIMARY KEY(id));

-- CREATE TABLE IF NOT EXISTS photoListings (
--   id SERIAL NOT NULL,
--   property_description VARCHAR(150),
--   src VARCHAR(420),
--   propertyListing_id INT,
--   PRIMARY KEY (id)
-- );
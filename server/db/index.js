var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '123456',
})

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS listings', function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('Listings DB created')
  };
})

connection.query('USE listings', function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('Database changed to listings')
  };
})

connection.query('CREATE TABLE IF NOT EXISTS propertyListings ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, property_description VARCHAR(50), PRIMARY KEY (id)) ENGINE=INNODB;', function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('propertyListings Table created')
  };
});

connection.query('CREATE TABLE IF NOT EXISTS photos ( id INT NOT NULL AUTO_INCREMENT, src VARCHAR(250) NOT NULL, propertyListing_id INT, FOREIGN KEY (propertyListing_id) REFERENCES propertyListings(id) ON DELETE CASCADE, PRIMARY KEY(id))', function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('photos Table created')
  };
});

module.exports = connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '123456',
})

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS listings', function (error) {
  if (error) {
    throw error
  } else {
    console.log('Listings DB created')
  };
})

connection.query('USE listings', function (error) {
  if (error) throw error;
})

connection.query('CREATE TABLE IF NOT EXISTS propertyListings ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, property_description VARCHAR(50) PRIMARY KEY (id)', function (error) {
    if (error) {
      throw error
    } else {
      console.log('propertyListings Table created')
    };
  }
})

connection.query('CREATE TABLE IF NOT EXISTS photos ( id INT NOT NULL AUTO_INCREMENT, src VARCHAR(250) NOT NULL, FOREIGN KEY (propertyListings_id) REFERENCES properties(id) ON DELETE CASCADE', function (error) {
  if (error) {
    throw error
  } else {
    console.log('photos Table created')
  }
})

module.exports = connection
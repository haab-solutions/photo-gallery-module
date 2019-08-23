var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '123456',
})

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS listings', function (error) {
  if (error) throw error;
})

connection.query('USE listings', function (error) {
  if (error) throw error;
})

connection.query('CREATE TABLE IF NOT EXISTS propertyListings ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, property_description VARCHAR(50) PRIMARY KEY (id)'
    if (error) throw error;
})

connection.query('CREATE TABLE IF NOT EXISTS photos ( id INT NOT NULL AUTO_INCREMENT, src VARCHAR(250) NOT NULL, FOREIGN KEY (propertyListings_id) REFERENCES properties(id) ON DELETE CASCADE')

module.exports = connection
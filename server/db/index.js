const { Pool, Client } = require('pg')

const pool = new Pool({
  user: '',
  host: 'ec2-13-57-181-47.us-west-1.compute.amazonaws.com',
  database: 'listings',
  password: 'password',
  port: 5432,
})

pool.connect();

pool.query('SELECT $1:: text as message', ['Hello World'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
})

// GET pile of photos
const getListingPhotos = function (propertyId, callback) {
  pool.query(`SELECT * FROM photos WHERE propertyListing_id = ${propertyId};`, (err, results, fields) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results)
    }
  });
};

// POST pile of photos
const postListingPhotos = function (propertyId, callback) {
  pool.query(`INSERT INTO photos (src, property_description, propertyListing_id) VALUES ($1, $2, $3);`, (err, results, fields) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

// PUT (edit description) of a photo
const putListingPhotos = function (id, callback) {
  pool.query(`UPDATE photos SET property_decription WHERE id = ${id};`, (err, results, fields) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

// DELETE pile of photos
const deleteListingPhotos = function (id, callback) {
  pool.query(`DELETE FROM photos WHERE propertyListing_id = ${propertyId};`, (err, results, fields) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results)
    }
  });
}

console.log('Postgres Connection Hit');

module.exports = {pool, getListingPhotos, postListingPhotos, putListingPhotos, deleteListingPhotos}

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   user: 'root',
//   password: '123456',
//   multipleStatements: true
// })

// connection.connect();

// connection.query('CREATE DATABASE IF NOT EXISTS listings', function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//   } else {
//     console.log('Listings DB created')
//   };
// })

// connection.query('USE listings', function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//   } else {
//     console.log('Database changed to listings')
//   };
// })

// connection.query('CREATE TABLE IF NOT EXISTS propertyListings ( id INT NOT NULL AUTO_INCREMENT, property_description VARCHAR(50), PRIMARY KEY (id))', function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//   } else {
//     console.log('propertyListings Table created')
//   };
// });

// connection.query('CREATE TABLE IF NOT EXISTS photos ( id INT NOT NULL AUTO_INCREMENT, src VARCHAR(250) NOT NULL, propertyListing_id INT, FOREIGN KEY (propertyListing_id) REFERENCES propertyListings(id) ON DELETE CASCADE, PRIMARY KEY(id))', function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//   } else {
//     console.log('photos Table created')
//   };
// });

// module.exports = connection
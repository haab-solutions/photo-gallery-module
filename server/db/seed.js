var db = require('../db')
var faker = require('faker');

db.query('SHOW DATABASES', (err) => {
  if (err){
    throw(err)
  } else {
    console.log('showing databases')
  }
})

// PURGE propertyListings and photos tables
db.query('ALTER TABLE photos DROP FOREIGN KEY photos_ibfk_1;TRUNCATE photos; TRUNCATE propertyListings; ALTER TABLE photos ADD FOREIGN KEY (propertyListing_id) REFERENCES propertyListings(id) ON DELETE CASCADE', function (err) {
  if (err){
    console.log(err)
  } else {
    console.log('PropertyListings and photos purged')
  }
})

// Test faker
// console.log(faker.fake("{{lorem.words}}"))

//Generate 100 property listings
for (var i = 0; i < 100; i++) {
  var queryStr = 'INSERT INTO propertyListings (property_description) value(?);';
  var propertyListingData = [faker.fake("{{lorem.words}}")]
  db.query(queryStr,propertyListingData, (err, results, fields) => {
    if (err) {
      console.log(err)
    } else {
      // Generate 5 random photos for each property listing
      for (var j = 0; j < 5; j++) {
        var queryStr = 'INSERT INTO photos (src, propertyListing_id) value(?, ?);';
        var photoData = [`https://bnbair.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random()*5)}.jpg`, results.insertId];
        db.query(queryStr, photoData, (err, results) => {
          if (err) console.log(err)
        })
      }
    }
  })
}

console.log('100 properties and 500 photos seeded');
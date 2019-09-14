var db = require('../db');
var faker = require('faker');
const pool = require('../db');

// db.query('SHOW DATABASES', (err) => {
//   if (err){
//     throw(err)
//   } else {
//     console.log('showing databases')
//   }
// })

// PURGE propertyListings and photos tables
// db.query('ALTER TABLE photos DROP FOREIGN KEY photos_ibfk_1;TRUNCATE photos; TRUNCATE propertyListings; ALTER TABLE photos ADD FOREIGN KEY (propertyListing_id) REFERENCES propertyListings(id) ON DELETE CASCADE', function (err) {
//   if (err){
//     console.log(err)
//   } else {
//     console.log('PropertyListings and photos purged')
//   }
// })

// Test faker
// console.log(faker.fake("{{lorem.words}}"))

for (let i = 0; i < 1000000; i++) {

  let queryStr = 'INSERT INTO propertyListings (property_description) VALUES ($1);';

  let propertyListingData = [faker.fake("{{lorem.words}}")]
  pool.query(queryStr, propertyListingData, (err, results, fields) => {
    if (err) {
      console.log(err)
    } else {
      console.log(i);
      // Generate min 5 up to 10 random photos for each property listing
      let randomNumOfPhotos = Math.ceil(Math.random()*5) + 5
      for (let j = 0; j < randomNumOfPhotos; j++) {

        var queryStr = 'INSERT INTO photos (src, propertyListing_id) VALUES ($1, $2);';
// math . random 900?
        let photoData = [`https://sdc-photos-data.s3-us-west-1.amazonaws.com/faker_data/${Math.ceil(Math.random()*900)}.jpg`, results.insertId];
        pool.query(queryStr, photoData, (err, results) => {
          if (err) {
            console.log(err);
          }
        })
      }
    }
  })
}

console.log('WE GOIN');
// const db = require('../db');
const faker = require('faker');
// const pool = require('../db');
const fs = require('file-system');

// const writeListings = fs.createWriteStream('listingsData.csv');
// writeListings.write('id\n', 'utf8');

const writePhotos = fs.createWriteStream('photosData.csv');
writePhotos.write('id, src, property_description, propertyListing_id\n', 'utf8');

// function writeTenMillionListings(writer, encoding, callback) {
//   let i = 10000001;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const data = `${id}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
// // see if we should continue, or wait
// // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
// // had to stop early!
// // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }
// writeTenMillionListings(writeListings, 'utf-8', () => {
//   writeListings.end();
// });

function write90MillionPhotos(writer, encoding, callback) {
  let id = 0;
  let i = 90000000;
  let propertyId = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (i % 9 === 0) {
        propertyId++;
      }
      const src = `https://sdc-photos-data.s3-us-west-1.amazonaws.com/faker_data/${Math.ceil(Math.random()*900)}.jpg`;
      const property_description = faker.fake("{{lorem.words}}");
      const data = `${id}, ${src}, ${property_description}, ${propertyId}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if(id % 1000000 === 0) {
        console.log(id)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
write90MillionPhotos(writePhotos, 'utf-8', () => {
  writePhotos.end();
});


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

// for (let i = 0; i < 1000000; i++) {

//   let queryStr = 'INSERT INTO propertyListings (property_description) VALUES ($1);';

//   let propertyListingData = [faker.fake("{{lorem.words}}")]
//   pool.query(queryStr, propertyListingData, (err, results, fields) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(i);
//       // Generate min 5 up to 10 random photos for each property listing
//       let randomNumOfPhotos = Math.ceil(Math.random()*5) + 5
//       for (let j = 0; j < randomNumOfPhotos; j++) {

//         var queryStr = 'INSERT INTO photos (src, propertyListing_id) VALUES ($1, $2);';
// // math . random 900?
//         let photoData = [`https://sdc-photos-data.s3-us-west-1.amazonaws.com/faker_data/${Math.ceil(Math.random()*900)}.jpg`, results.insertId];
//         pool.query(queryStr, photoData, (err, results) => {
//           if (err) {
//             console.log(err);
//           }
//         })
//       }
//     }
//   })
// }

console.log('WE GOIN');
var db = require('./index.js')
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

// // Test faker
// console.log(faker.fake("{{lorem.words}}"))

//Generate 100 property listings
for (var i = 0; i < 100; i++){
  var queryStr = 'INSERT INTO propertyListings (property_description) value(?);';
  var propertyListingData = [faker.fake("{{lorem.words}}")]
  db.query(queryStr,propertyListingData, (err, results) => {
    if (err) console.log(err)
  })
  // Generate 5 photos per listing
  for (var j = 0; j < 5; j++) {
    var queryStr = 'INSERT INTO photos (src, propertyListing_id) value(?, ?);';
    var photoData = [`https://bnbair.s3-us-west-1.amazonaws.com/${Math.ceil(Math.random()*5)}.jpg`, i]
    db.query(queryStr, photoData, (err, results) => {
      if (err) console.log(err)
    })
  }
}
console.log('100 properties seeded')

// SAMPLE propertyListings and photos QUERY STATEMENTS
//INSERT INTO propertyListings(property_description) value("This is a nice place stay")
//INSERT INTO photos(src, propertyListing_id) value ('https://bnbair.s3-us-west-1.amazonaws.com/5.jpg', 1);

// SAMPLE escape value query
// var queryStr = 'insert into transactions(name, email, password, address_line1, address_line2, city, state, zip_code, credit_card_num, expiry_date, CVV, billing_zip_code) value(?,?,?,?,?,?,?,?,?,?,?,?)';
// db.query(queryStr, params, function(err, results){
//   callback(err, results);
// })

// Generate 5 random pics for each property



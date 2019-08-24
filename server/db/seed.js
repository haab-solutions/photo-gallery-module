var db = require('./index.js')
var faker = require('faker');

db.query('SHOW DATABASES', (err) => {
  if (err){
    throw(err)
  } else {
    console.log('showing databases')
  }
})

// // Test faker
// console.log(faker.fake("{{lorem.words}}"))

// Generate 100 property listings
for (var i = 0; i < 100; i++){
  var queryStr = '';
  var propertyListingData = [
    i, faker.fake("{{lorem.words}}")
  ]
  // db.query(queryStr, propertyListingData, (err, results) => {})
}

//INSERT INTO propertyListings(property_description) value("This is a nice place stay")
// Generate 5 random pics for each property

// TODO: Clearing database
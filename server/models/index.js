var db = require('../db');

module.exports = {
  propertyListing: {
    get: function (callback){
      db.query('SELECT * FROM propertyListings WHERE id = 1; SELECT * FROM photos WHERE propertyListing_id = 1', function(err, results) {
        if (err) {
          console.log(err)
        } else {
          callback(results)
        }
      })
    }
  }
}
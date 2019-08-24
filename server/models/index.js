var db = require('../db');

module.exports = {
  propertyListing: {
    get: function (callback){
      db.query('SELECT * FROM propertyListings', function(err, results) {
        if (err) {
          console.log(err)
        } else {
          callback(results)
        }
      }
      )
    }
  }
}
var pool = require('../db');

module.exports = {
  propertyListing: {
    get: function (id, callback){
      pool.query('SELECT * FROM propertyListings WHERE id = ?; SELECT * FROM photos WHERE propertyListing_id = ?', [id, id], function(err, results) {
        if (err) {
          console.log(err)
        } else {
          callback(results)
        }
      })
    }
  }
}
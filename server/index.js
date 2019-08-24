const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const Promise = require("bluebird");
const models = require('./models');
// const models = Promise.promisifyAll(require('./models'));
const app = express();
const port = 3000;

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true}))

// app.get('/', (req, res) => res.send('Hello World'))

app.get('/api/photos/:propertyId', (req, res) => {
  const modelsPropertyListingGet = Promise.promisify(models.propertyListing.get)
  modelsPropertyListingGet((results) => res.json(results))
    .catch((err) => console.log(err))
    // res.send('photos request sent')
})

app.listen(port, () => console.log(`Listening on port ${port}...`))
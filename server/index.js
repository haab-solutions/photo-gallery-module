require('newrelic');
const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const Promise = require("bluebird");
const models = require('./models');

app.use(cors())
// app.use('/listing/:id', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', express.static('public'))

app.get('/api/photos/:propertyId', (req, res) => {
  console.log(req.params.propertyId);
  const { propertyId } = req.params;
  pool.getListingPhotos(propertyId, (err, data) => {
    if (err) {
      console.log('SERVER GET LISTING PHOTOS ERROR: ', err);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET LISTING PHOTOS SUCCESS');
      res.status(200).send(data.rows);
    }
  });
});

app.post('/api/photos/:propertyId', (req, res) => {
  console.log(req.params.propertyId);
  const { id } = req.params;
  pool.postListingPhotos(propertyId, (err, data) => {
    if (err) {
      console.log('SERVER POST LISTING PHOTOS ERROR: ', err);
      res.status(500).send(err);
    } else {
      console.log('SERVER POST LISTING PHOTOS SUCCESS');
      res.status(201).send(data.rows);
    }
  });
})

app.put('/api/photos/:id', (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  pool.postListingPhotos(id, (err, data) => {
    if (err) {
      console.log('SERVER POST LISTING PHOTOS ERROR: ', err);
      res.status(500).send(err);
    } else {
      console.log('SERVER POST LISTING PHOTOS SUCCESS');
      res.status(201).send(data.rows);
    }
  });
})

app.delete('/api/photos/:id', (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  pool.postListingPhotos(id, (err, data) => {
    if (err) {
      console.log('SERVER POST LISTING PHOTOS ERROR: ', err);
      res.status(500).send(err);
    } else {
      console.log('SERVER POST LISTING PHOTOS SUCCESS');
      res.status(201).send(data.rows);
    }
  });
})


// app.get('/api/photos/:id', (req, res) => {
//   console.log(req.params.id);
//   const id = req.params.id;
//   const modelsPropertyListingGet = Promise.promisify(models.propertyListing.get)
//   modelsPropertyListingGet(id, (results) =>
//     res.json(results))
//     .catch((err) => console.log(err))
// })

// app.get('api/property/:propertyId/photos', (req, res) => {
//   queryAll = 'SELECT * FROM photos'
// })


app.listen(port, () => console.log(`Listening on port ${port}...`))
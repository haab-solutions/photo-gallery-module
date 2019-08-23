const express = require('express');
var db = require('./db');
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get('/', (req, res) => res.send('Hello World'))

app.get('/photos/:propertyId', (req, res) => {
  // console.log(req.params)
  res.send('photos request sent')
})

app.listen(port, () => console.log(`Listening on port ${port}...`))
var fetch = require('node-fetch');
var computeLix = require('./readability.js')
var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.options('/api/v1/readability', cors())

// POST: {"text":"This is a Test"}  <-- JSON encoding
app.post('/api/v1/readability', cors(), function (req, res) {
  var userText = req.body.text;
  console.log("req.body.text: " + userText);
  res.send(computeLix(userText));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

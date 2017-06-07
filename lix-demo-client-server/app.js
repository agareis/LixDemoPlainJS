var computeLix = require('./readability.js')
var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// POST: {"text":"This is a Test"}  <-- JSON encoding
app.post('/api/v1/readability', function (req, res) {
  var userText = req.body.text;
  res.send(computeLix(userText));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

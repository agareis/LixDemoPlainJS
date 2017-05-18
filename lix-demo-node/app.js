var express = require('express')
var app = express()

// app.get('/api/v1/readability', function (req, res) {
//   res.send('GET request to homepage');
// });

app.post('/api/v1/readability', function (req, res) {
  res.send('Got a POST request')
  // req.send('Difficulty: Easy!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

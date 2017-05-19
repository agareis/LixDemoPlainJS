var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());

function getWordsCount(str) {
  return str.split(' ').length;
}
function getPeriodsCount(str) {
    var dots = str.split(".").length - 1;
    var colons = str.split(":").length - 1;
    var capLetters = str.length - str.replace(/[A-Z]/g, '').length;
    return (dots+colons+capLetters);
}
function getLongWordsCount(str) {
  var match = str.match(/[\w0-9]{7,}/gi);
  if (match === null) {  // No long words were found
    return 0;
  }
  return match.length;
}
function computeLix(str) {
  var lix = (getWordsCount(str) / getPeriodsCount(str)) +
  (getLongWordsCount(str) * 100 / getWordsCount(str));

  if (lix==Infinity) {
    return "Not enought characters or periods. Please add or type some more content.";
  } else if (lix < 30) {
    return "Difficulty: Very easy";
  } else if (lix>=30 && lix<40) {
    return "Difficulty: Easy";
  } else if (lix>=40 && lix<50) {
    return "Difficulty: Medium";
  } else if (lix>=50 && lix<60) {
    return "Difficulty: Difficult";
  } else if (lix>=60) {
    return "Difficulty: Very Difficult";
  }
}
// POST: {"text":"This is a Test"}  <-- JSON encoding
app.post('/api/v1/readability', function (req, res) {
  var userText = req.body.text;
  res.send(computeLix(userText))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

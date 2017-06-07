function getWordsCount(str) {
  if (str === undefined) { // No words were found
    console.log("getWordsCount:" + 0);
    return 0;
  }
  console.log("getWordsCount:" + str.split(' ').length);
  return str.split(' ').length;
}
function getPeriodsCount(str) {
  if (str === undefined) { // No Periods were found
    console.log("getPeriodsCount:" + 0);
    return 0;
  }
  var dots = str.split(".").length - 1;
  var colons = str.split(":").length - 1;
  var capLetters = str.length - str.replace(/[A-Z]/g, '').length;
  console.log("getPeriodsCount: ->dots: " +dots+" colons: "+ colons+" capLetters: "+capLetters);
  return (dots+colons+capLetters);
}
function getLongWordsCount(str) {
  if (str === undefined) { // No long words were found
    console.log("getLongWordsCount:" + 0);
    return 0;
  }
  var match = str.match(/[\w0-9]{7,}/gi);
  if (match === null) {  // No long words were found
    console.log("getLongWordsCount: "+ 0);
    return 0;
  }
  console.log("getLongWordsCount: "+ match.length);
  return match.length;
}
var computeLix = function(str) {
  var lix = (getWordsCount(str) / getPeriodsCount(str)) +
  (getLongWordsCount(str) * 100 / getWordsCount(str));
  console.log("computeLix: "+ lix);

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
module.exports = computeLix;

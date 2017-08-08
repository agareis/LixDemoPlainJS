function getWordsCount(str) {
  if (str === undefined) { // No words were found
    console.log("getWordsCount:" + 0);
    return 0;
  }
  console.log("getWordsCount:" + str.split(' ').length);
  return str.split(' ').length;
}
function getSentencesCount(str) {
  if (str === undefined) { // No words were found
    console.log("getSentencesCount:" + 0);
    return 0;
  }
  console.log("getSentencesCount:" + str.trim().split(/[\.\?\!]\s|$/).length);
  // [\.\?\!] - Punctuation
  // (\s|$) - Whitespace character OR the end of the string.
  return str.trim().split(/[\.\?\!]\s|$/).length;
}
function getSyllablesCount(str) {
  var hyphenationPatternsDe = require ('hyphen/patterns/de.js');
  var createHyphenator = require('hyphen');
  var hyphenate = createHyphenator(hyphenationPatternsDe, {hyphenChar:' '});// use blank for counting syllables
  var hyphenatedText = hyphenate(str);
  if (str === undefined) { // No words were found
    console.log("getSyllablesCount:" + 0);
    return 0;
  }
  console.log("getSyllablesCount:" + hyphenatedText.split(' ').length);
  return hyphenatedText.split(' ').length;
}
var computeFRE = function(str) {
  var fre = 180 - (getWordsCount(str) / getSentencesCount(str)) -
  (58.5 * getSyllablesCount(str) / getWordsCount(str));
  console.log("computeFRE: "+ fre);

  if (fre==Infinity | fre==-Infinity) {
    return "Not enought characters or periods. Please add or type some more content.";
  } else if (fre < 30) {
    return "Difficulty: Very Difficult";
  } else if (fre>=30 && fre<50) {
    return "Difficulty: Difficult";
  } else if (fre>=50 && fre<60) {
    return "Difficulty: Medium Difficult";
  } else if (fre>=60 && fre<70) {
    return "Difficulty: Medium";
  } else if (fre>=70 && fre<80) {
    return "Difficulty: Medium Easy";
  } else if (fre>=80 && fre<90) {
    return "Difficulty: Easy";
  } else if (fre>=90) {
    return "Difficulty: Very Easy";
  }
}
module.exports = computeFRE;

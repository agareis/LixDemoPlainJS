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
    try {
      return str.match(/[\w0-9]{7,}/gi).length;
    }
    catch (error){
      console.log("Something went wrong ", error);
      return 0;
    }
  }
  function computeLix() {
    var lix = (getWordsCount(userText.value) / getPeriodsCount(userText.value)) +
    (getLongWordsCount(userText.value) * 100 / getWordsCount(userText.value));

    if (lix==Infinity) {
      return "Not enought characters or periods. Please add or type some more content.";
    } else {
      return lix;
    }
  }

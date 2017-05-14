  function wordCount(str) {
    return str.split(' ').length;
  }
  function countPeriods(str) {
      var dots = str.split(".").length - 1;
      var colons = str.split(":").length - 1;
      var capLetter = str.length - str.replace(/[A-Z]/g, '').length;
      return (dots+colons+capLetter);
  }
  function longWordCount(str) {
    try {
      return str.match(/[\w0-9]{7,}/gi).length;
    }
    catch (error){
      console.log("Something went wrong ", error);
    }
    finally {
      return null;
    }
  }
  function lixCalc() {
    var lix = (wordCount(userText.value) / countPeriods(userText.value)) +
    (longWordCount(userText.value) * 100 / wordCount(userText.value));

    if (lix==Infinity) {
      return "Not enought characters or periods. Please add or type some more content.";
    } else {
      return lix;
    }
  }

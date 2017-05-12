
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
      return str.match(/[\w0-9]{8,}/gi).length;
  }
  function lixCalc() {
    var lix = (wordCount(userText.value) / countPeriods(userText.value)) +
    (longWordCount(userText.value) * 100 / wordCount(userText.value));
    return lix;
  }

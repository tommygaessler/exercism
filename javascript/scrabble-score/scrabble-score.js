var score = function (word) {
    var myScore = 0;

    var onePointLetters = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var twoPointLetters = ["D", "G"];
    var threePointLetters = ["B", "C", "M", "P"];
    var fourPointLetters = ["F", "H", "V", "W", "Y"];
    var fivePointLetters = ["K"];
    var eightPointLetters = ["J", "X"];
    var tenPointLetters = ["Q", "Z"];

    if (word == null) {
      return myScore;
    } else {
      var splitWord = word.toUpperCase().split('');

      for (var i = 0; i < splitWord.length; i++) {
        if (onePointLetters.includes(splitWord[i])) {
        myScore += 1;
      } else if (twoPointLetters.includes(splitWord[i])) {
        myScore +=2;
      } else if (threePointLetters.includes(splitWord[i])) {
        myScore +=3;
      } else if (fourPointLetters.includes(splitWord[i])) {
        myScore +=4;
      } else if (fivePointLetters.includes(splitWord[i])) {
        myScore +=5;
      } else if (eightPointLetters.includes(splitWord[i])) {
        myScore +=8;
      } else if (tenPointLetters.includes(splitWord[i])) {
        myScore +=10;
      } else {myScore += 0};
    }
  }
  console.log("Your score is " + myScore);
  return myScore;
}

module.exports = score;

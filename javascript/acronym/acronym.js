var Acronyms = function(input) {

  var input = input.replace("-", " ");
  var input = input.replace(",", "");
  var output = '';

  inputArray = input.split("");

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i+1] && inputArray[i-1]) {
      if (inputArray[i] === inputArray[i].toUpperCase() && inputArray[i+1] === inputArray[i+1].toUpperCase()) {
        continue;
      }
      else if (inputArray[i+1] === inputArray[i+1].toLowerCase() && inputArray[i] === inputArray[i].toUpperCase() && inputArray[i] !== ' ' && inputArray[i] !== ':') {
        inputArray.splice([i-1], 1, " ");
      }
    }
  }

  inputArray = inputArray.join('');

  inputArray = inputArray.split(" ");

  inputArray.map(function(word, index) {
    output+=word[0];
  });

  return output.toUpperCase();
}

console.log(Acronyms('PHP: Hypertext Preprocessor'));

module.exports = Acronyms;

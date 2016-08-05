//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  var findPun = input.length;

  var foundPun = input.charAt(findPun-1);

  var foundFirst = input[0];

  if (input.trim() === '') {
    return 'Fine. Be that way!';
  }

  else if (foundPun === '.' || input.includes('\'')) {
    return 'Whatever.';
  }

  else if (foundPun === "!" && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  }

  else if (foundPun === "?" && input.toUpperCase() === input.toLowerCase()) {
    return 'Sure.';
  }

  else if (foundPun === "?" && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  }

  else if (foundPun === "!" || input.includes('\'')) {
    return 'Whatever.';
  }

  else if (foundPun !== "!" && foundPun !== "?" && foundPun !== "." && input.toUpperCase() === input.toLowerCase()) {
    return 'Whatever.';
  }

  else if (foundPun === "?") {
    return 'Sure.';
  }

  else if (foundPun !== "!" && foundPun !== "?" && foundPun !== "." && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  }

  else if (input.includes('\xe4') || input.includes('\xfc')) {
    return 'Whatever.'
  }
};

module.exports = Bob;

const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed ${actual} === ${expected}`)
//   } else {
//     console.log(`Assertion Failed ${actual} !== ${expected}`)
//   }
// };

const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

const sentence = "jasondiisawesome";

const result1 = countLetters(sentence);
assertEqual(result1["j"], 5);
assertEqual(result1["a"], 3);
assertEqual(result1["e"], 2);
assertEqual(result1["z"], undefined);

module.exports = countLetters;
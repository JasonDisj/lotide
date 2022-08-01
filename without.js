const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       } 
//     }
//     return true;
// }

const without = function(originalArr, removedArr) {
  let result = [];
  let sameElement = false;
  for (let i = 0; i < originalArr.length; i++) {
    for (let j = 0; j < removedArr.length; j++) {
      if (eqArrays(originalArr[i], removedArr[j])) {
        sameElement = true;
      }
    } if (!sameElement) {
      result.push(originalArr[i]);
    }
  }
  return result;
}

const words = [ "hello", "world", "lighthouse" ];
const shortWords = without(words, ["lighthouse"]); // words = originalArr

console.log(shortWords);

assertArraysEqual(words, [ "hello", "world", "lighthouse" ]);
assertArraysEqual(shortWords, [ "hello", "world", "lighthouse" ]);

module.exports = without;
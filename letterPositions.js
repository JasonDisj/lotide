const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
    return true;
}
const letterPositions = function(sentence) {
  const results = {};
  let newString = sentence.replace(/\s/g, "");
  for (let i = 0; i < newString.length; i++) {
    let letter = newString[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = []];
      results[letter].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  } 
  if (array.length > 2 && array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
  } else {
    result.push(array[Math.floor(array.length / 2)]);
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
const newArr = middle(words);

console.log(newArr);

assertArraysEqual(newArr, ["hello", "world", "lighthouse"]);
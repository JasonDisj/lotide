const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) { // e.g until data[5] = -1 < 0 which is true, stop push and return results
      return results;
    }
    results.push(item); // e.g data[0] = 1 ≮ 0 which is false, push to results
  }
  return results;
}

const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const correctArray = [ 1, 2, 5, 7, 2 ];
const results1 = takeUntil(data, x => x < 0);

assertArraysEqual(results1, correctArray);
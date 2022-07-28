const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
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
};

const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1); // => all keys in obj1 as array
  let keyArr2 = Object.keys(object2); // => all keys in obj2 as array
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
    for (let key of keyArr1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
        else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
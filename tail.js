const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

const tail = function(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  } else if (arr.length === 1) {
    console.log("Tail equals to head");
  } else if (arr.length > 1) {
    let removedElement = arr.shift();
    return arr;
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
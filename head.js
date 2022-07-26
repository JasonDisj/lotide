const head = function(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  } else {
    return arr[0];
  }
};

console.assert(head([5,6,7]), 5);
console.assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
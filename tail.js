const tail = function(arr) {
  let result = [];
  if (arr.length === 0) {
    console.log("Array is empty");
  } else if (arr.length === 1) {
    return result.push(arr[0]);
  } else if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }
};

module.exports = tail;
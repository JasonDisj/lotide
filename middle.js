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

module.exports = middle;
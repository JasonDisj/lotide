const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);
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

assertObjectsEqual({ a: '1', b: 2, c: '3' }, { b: 2, a: '1', c: '3' });
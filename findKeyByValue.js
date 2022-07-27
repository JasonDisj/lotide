const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

//const findKeyByValue = function(object, value) {
  //let odjKeysArr = Object.keys(object);
  //let objValsArr = Object.values(object);
  //let result = "";
  //for (let i = 0; i < objValsArr.length; i++) {
    //if (value === objValsArr[i]) {
      //result = odjKeysArr[i];
    //} else {
      //result = undefined;
    //}
  //} return result;
//}

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 1]), true);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 1]), false);
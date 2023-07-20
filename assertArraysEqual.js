const assertEqual = require('./assertEqual');
  
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: [${array1}] is equal to [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${array1}] is not equal to [${array2}]`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

module.exports = assertArraysEqual;

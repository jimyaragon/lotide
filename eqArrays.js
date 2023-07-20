const assertEqual = require('./assertEqual')
  
function eqArrays(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Iterate through each element of the arrays and compare
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  // If all elements are equal, return true
  return true;
}

module.exports = eqArrays;

 
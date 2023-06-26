const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
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
  
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
  
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

 
// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };
    
//   function eqArrays(arr1, arr2) {
//     // Check if the arrays have the same length
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
    
//     // Iterate through each element of the arrays and compare
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
    
//     // If all elements are equal, return true
//     return true;
//   }
  
//   const assertArraysEqual = function(array1, array2) {
//     if (eqArrays(array1, array2)) {
//       console.log(`✅✅✅ Assertion passed: [${array1}] is equal to [${array2}]`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion failed: [${array1}] is not equal to [${array2}]`);
//     }
//   };

//   const without = function(source, itemsToRemove) {
//     let arrayresult = array[0];
//     for (let i = 0; i < source.length; i++) {
//         if (itemsToRemove[i] === source[i]) {
//             arrayresult += arrayresult[i];
//         }
//     } return arrayresult;
//   }
let source = [1, 2, 4, 6, 7];
let itemsToRemove = [4, 7];

function without(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {

    } else {
      result.push(source[i]);
    }
  } return result;
}



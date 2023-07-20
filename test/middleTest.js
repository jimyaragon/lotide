const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


console.log(middle([1]));      
console.log(middle([1, 2]));           
console.log(middle([1, 2, 3]));       
console.log(middle([1, 2, 3, 4]));   
console.log(middle([1, 2, 3, 4, 5])); 
console.log(middle([1, 2, 3, 4, 5, 6])); 
console.log(middle([1, 2, 3, 4, 5, 6, 7])); 
console.log(middle(["hello", "world", "it is", "me"])); 

assertEqual(middle([1]), 1);      
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(middle(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true

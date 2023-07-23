const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    // Array length is even, return two middle elements
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // Array length is odd, return middle element
    return array[middleIndex];
  }
};

module.exports = middle;
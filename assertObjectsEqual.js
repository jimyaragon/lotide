const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
    
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};
  
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ True: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 False: ${actual} !== ${expected}`);
  }
};
  
  
  
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
  
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true);
  
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
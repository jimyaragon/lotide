const flatten = function(obj) {
  let flattened = [];
  
  // Recursive function to flatten arrays
  const flattenArray = function(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flattenArray(item); // Recursively flatten nested arrays
      } else if (typeof item === 'number') {
        flattened.push(item); // Add numbers to flattened array
      }
    }
  };
  
  // Check if the input object is an array
  if (Array.isArray(obj)) {
    flattenArray(obj);
  } else {
    console.log("Invalid input: Expected an object with arrays and numbers.");
    return null;
  }
  
  return flattened;
};

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  
    } else {
      console.log(`🛑🛑🛑 Assertion failed: ${actual}!=== ${expected}`);
  
    }
  
  };
  const tail = function(array) {
    return array.slice(1);
  };

  const result = tail(["Hello", "Lighthouse","Labs"]);

  // Test Code
  assertEqual(result.length, 2);
  assertEqual(result[1], "Labs");

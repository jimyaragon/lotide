// const assertArraysEqual = function(array1, array2) {
//     if (eqArrays(array1, array2)) {
//       console.log(`✅✅✅ Assertion passed: [${array1}] is equal to [${array2}]`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion failed: [${array1}] is not equal to [${array2}]`);
//     }
//   };

//   function eqArrays(arr1, arr2) {
//     // Check if the arrays have the same length
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
// }
//     // Iterate through each element of the arrays and compare
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     };

    const letterPositions = function(sentence) {
        const results = {};
      
        for (let i = 0; i < sentence.length; i++) {
          const letter = sentence[i];
      
          if (letter !== ' ') {
            if (results[letter]) {
              results[letter].push(i);
            } else {
              results[letter] = [i];
            }
          }
        }
      
        for (const letter in results) {
          if (results[letter].length < 2) {
            delete results[letter];
          }
        }
      
        return results;
      };

      const sentence = "hello world";
      const positions = letterPositions(sentence);
      console.log(positions);
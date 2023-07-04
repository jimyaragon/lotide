const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
}

const countLetters = function(sentence) {
    const counts = {};
  
    for (const char of sentence) {
      if (char !== ' ') {
        if (counts[char]) {
          counts[char] += 1;
        } else {
          counts[char] = 1;
        }
      }
    }
  
    return counts;
  };

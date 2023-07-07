const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


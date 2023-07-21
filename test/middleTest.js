const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe('middle', () => {
  it('should return the middle element of an array with odd length', () => {
    assert.strictEqual(middle([1]), 1);
    assert.strictEqual(middle([1, 2, 3]), 2);
    assert.strictEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it('should return the two middle elements of an array with even length', () => {
    assert.isTrue(eqArrays(middle([1, 2]), [1, 2]));
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});





const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return the tail of an array', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should return an array of length 2', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });


  it('should return an empty array for an empty input array', () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});



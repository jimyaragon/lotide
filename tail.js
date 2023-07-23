const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse","Labs"]);

module.exports = tail;
  



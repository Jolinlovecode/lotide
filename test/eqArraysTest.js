const assertEqual = require('../assertEqual');
let result = false
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        result = true;
      }
    }
  }
  return result;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


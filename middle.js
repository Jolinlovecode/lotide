// ACTUAL FUNCTION

const middle = function(array) {
  let finalArray = [];
  if (array.length % 2 === 0 && array.length > 2) {
    finalArray.push(array[((array.length / 2) - 1)]);
    finalArray.push(array[(array.length) / 2 ]);
    

  };
  if (array.length % 2 === 1 && array.length > 2) {
    finalArray.push(array[((array.length - 1) / 2)]);
  }
  return finalArray;
};

// TEST CODE
// ...

console.log(middle([1]));
console.log(finalArray);
console.log(middle([1, 2, 3]));
console.log(finalArray)
console.log(middle([1, 2, 3, 4]));


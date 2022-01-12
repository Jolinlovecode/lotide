const assertArraysEqual = function(firstArray, secondArray) {
  let result = false;

  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        result = true;
      }
    }

  }
  

  if (result) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
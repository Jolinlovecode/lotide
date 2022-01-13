const letterPositions = function(sentence) {
  const results = {};
  
  // logic to update results here
  let realLetter = ["a", "b", "c", "d", "e", "f"];
  
  for (let letter of sentence) {
    if (realLetter.includes(letter)) {
        
      results[letter] = sentence.indexOf(letter);
    }
        
  }
  return results;
};

console.log(letterPositions("cdde"));

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
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
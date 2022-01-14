const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let letter of sentence) {
    if (letter !== " " && letter !== ",") {
      if (results[letter]) {
        results[letter].push(counter);
      } else {
        results[letter] = [counter];
      }
    }
    counter++;
  }
  return results;
};

console.log(letterPositions("ddde"));


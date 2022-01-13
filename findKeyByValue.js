const findKeyByValue = function(bestTVShowsByGenre, showsName) {
  for (let bestTVShowsType of Object.keys(bestTVShowsByGenre)) {
    if (showsName === bestTVShowsByGenre[bestTVShowsType]) {
      return bestTVShowsType;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

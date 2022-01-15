const findKey = function(nameObj, callback) {
  for (let name of Object.keys(nameObj)) {
    if (callback(nameObj[name])) {
      return name;
    }
  }
  return undefined;
};

const nameObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
console.log(findKey(nameObj, x => x.stars === 2));
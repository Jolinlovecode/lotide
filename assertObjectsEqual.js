const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for(let key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        return "true";
      }
    }
  }
  return "false";
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};



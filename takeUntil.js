const takeUntil = function(array, callback) {
  // ...
  let result = [];
   for(let item of array) {
    result.push(item);
    if (callback(item)) {
    break;
    }
    
  }
  let finalResult = result.slice(0,-1);
  return finalResult;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
let finalArray = [];
const without = function(sourceArray, itemsToRemoveArray) {
  
  for (let key of itemsToRemoveArray) {
    
     if(sourceArray.include(key)) {

       finalArray = sourceArray.remove(key);
     }

    
  }
  return finalArray;
}



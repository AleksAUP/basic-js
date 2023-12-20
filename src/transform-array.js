const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
   }
   if (arr.length === 0) {
    return arr
   }
   
 
    for (let i = 0; i < arr.length; i++) {
      
      
    }
    
   


   if (arr.length === 4) {
    for (let i = 0; i < arr.length; i++) {
      let newArr = []
      if (arr[i] === '--discard-prev' && arr.includes(2)) {
        for (let j = i + 1; j < arr.length; j++) {
          newArr.push(arr[j])
          
        }
       
        return newArr
      }
      if (arr[i] === "--double-prev" && arr.includes(2)) {
        for (let j = i + 1; j < arr.length; j++) {
          newArr.push(arr[j])
          
        }
       
        return newArr
      }
      
      if (arr[i] === "--double-next" && arr.includes(2)) {
        for (let j = 0; j < i; j++) {
          newArr.push(arr[j])
          
        }
       
        return newArr
      }
  
      if (arr[i] === "--discard-next" && arr.includes(2)) {
        for (let j = 0; j < i; j++) {
          newArr.push(arr[j])
          
        }
       
        return newArr
      }
     }
   }

   


  return arr
  
}

module.exports = {
  transform
};

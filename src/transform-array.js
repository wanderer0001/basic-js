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
  if(Array.isArray(arr)) {
    const transformed = [];
    const deleted = [];
    for(let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          if(i+1 != arr.length) {
            deleted.push(i + 1);
            i +=2;
          }
          break;
        case '--discard-prev':
          if(i-1 >= 0) {
            transformed.pop();
          }
          break;
        case '--double-next':
          if(i+1 != arr.length) {
            transformed.push(arr[i + 1])
          }
          break;
        case '--double-prev':
          if(i-1 > 0) {
            if(deleted.includes[i-1]) {
              break;
            } else {
              transformed.push(arr[i-1])
            }
          }
          break;
        
        default:
          transformed.push(arr[i])
      }
    }
    return transformed;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  
}

module.exports = {
  transform
};

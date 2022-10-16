const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let temp = String(n).split('').map(item => item);
  let tempCopy = [...temp];

  let max = 0;
  for (let i = 0; i < temp.length; i++) {
    tempCopy.splice(i, 1);
    if (+tempCopy.join('') >= max) {
      max = +tempCopy.join('');
    }
    tempCopy = [...temp];
  }

  return max;
}

module.exports = {
  deleteDigit
};

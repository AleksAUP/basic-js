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
  let numArr = n.toString().split('');
  let arrStr1 = [];
  let arrStr2 = []
  let arrLength = numArr.length
  for (let i = 0; i < numArr.length; i++) {
    debugger
    arrStr1.push(numArr.splice(i , 1)[0]);
    arrStr2.push(numArr.join(''));
    numArr.splice(i, 0, arrStr1[i])[0];
    if (i === arrLength) {
      break;
    }
  }
  let maxNum = arrStr2[0];
  for (let i = 1; i < arrStr2.length; i++) {
    if (maxNum < arrStr2[i]) {
      maxNum = arrStr2[i]
    }
    
  }
  return +maxNum
}

module.exports = {
  deleteDigit
};

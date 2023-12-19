const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return ''
  }
  const strObj = []
  let arr = []
  let sum = 1;
  let sumEl;
  for (let i = 0; i < str.length; i++) {
    debugger
    if (arr[arr.length - 1] === str[i]) {
      debugger
      sum = 2;
      if (sumEl >= 2 && sumEl) {
        sumEl++
      } else  sumEl = sum;
      strObj[strObj.length - 1] =sumEl + str[i];  
      arr[arr.length] = str[i]
    }
    else {
      strObj[strObj.length] = str[i];
      arr[i] = str[i]
      sumEl = 0
    } 
    }
    let incodStr = ''
    for (let i = 0; i < strObj.length; i++) {
      if (strObj[i]) {
        incodStr +=strObj[i]
      }
    }
    return incodStr
}

module.exports = {
  encodeLine
};

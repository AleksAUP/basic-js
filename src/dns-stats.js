const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {

  }
  let newArr
    for (let i = 0; i < domains.length; i++) {
       newArr = domains[i].split('.').reverse();
       let elem = ''
      for (let j = 0; j < newArr.length; j++) {
       elem += '.' + newArr[j]
       if (newArr.includes(newArr[j])) {
        if (dns[elem]) {
          dns[elem] += 1;
        }
        else dns[elem] = 1;
       }
      }
    }
    return dns
  
}

module.exports = {
  getDNSStats
};

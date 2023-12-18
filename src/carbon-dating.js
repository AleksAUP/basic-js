const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity <= 0 || isNaN(sampleActivity)){
    return false
  }
  if (typeof sampleActivity !== 'string' || sampleActivity > MODERN_ACTIVITY) {
    return false
  }
  let activity = Math.log2(MODERN_ACTIVITY / +sampleActivity)
  let age = activity * HALF_LIFE_PERIOD
  if ( typeof Math.ceil(age) === NaN ){
    return false
  }
  return Math.ceil(age)
}

module.exports = {
  dateSample
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date) {
  if (!!isNaN(Date.parse(date))) {
    throw new Error('Invalid date!" on invalid argument')
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.getFullYear() < 1970) {
   
  }

  let month = date.getMonth() + 1;
  let dataDay = date.getDate();
  let season = null

if (month >= 1 && month < 3) season = "winter";
if (month == 12) return "winter";
if (month > 2 && month < 6) season = "spring";
if (month >= 6 && month < 9) season = "summer";
if (month >= 9 && dataDay >= 0) season = "fall";
//if (month > 9 && month <= 12) season = "fall";
if (month >= 12 && dataDay > 20) season = "winter";
if (season){
  return season.toLowerCase()
}else false
 
}

module.exports = {
  getSeason
};

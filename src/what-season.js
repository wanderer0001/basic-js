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
 function getSeason(date) {
  const seasons = {
    11: 'winter',
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
  }
  
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  
  if(String(date.__proto__.constructor) == 'function Date() { [native code] }' && date[Object.getOwnPropertySymbols(date)[0]] == undefined) {
    return seasons[date.getMonth()]
  } 
  else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options, separator = '+', additionSeparator = '|', repeatTimes = 1, additionRepeatTimes = 1) {
  function repeatAddition() {
    let result = [];

    for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : additionRepeatTimes); i++) {
      result.push(options.addition === null ? String(options.addition) : options.addition)
    }

    if (options.additionSeparator) {
      return result.join(options.additionSeparator);
    } else {
      return result.join(additionSeparator);
    }

  }
  let result = [];
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : repeatTimes); i++) {
    result.push(`${String(str)}${repeatAddition()}`);
  }


  if (options.separator) {
    return result.join(options.separator);
  } else {
    return result.join(separator);
  }

}

module.exports = {
  repeater
};

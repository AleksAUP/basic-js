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
function repeater(str, options) {
  if (str || str === null) {
    let el = ''

    if (options.repeatTimes && options.addition && options.additionRepeatTimes) {
      debugger
      let separator = '|'
      if (options.additionSeparator) {
        separator = options.additionSeparator
      }
    
      for (let i = 0; i < options.repeatTimes; i++) {
        el += str
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j !== options.additionRepeatTimes - 1) {
            el += options.addition + separator
          } else {
            el += options.addition 
          }
         
          
        }
      
        if (i !== options.repeatTimes - 1) {
          if (options.separator) {
            el += options.separator
          } else el += '+'
        } 
  }
      return el
    }

    

    if (options.repeatTimes
      && options.separator
      && options.addition || options.addition === false || options.addition === null
      && options.additionRepeatTimes
      && options.additionSeparator) {
      debugger
      let separator = '+';
      let addition;
      let additionSeparator;
      if (options.addition === null) {
        addition = 'null'
      }
      if (options.separator) {
        separator = options.separator;
      }
      if (options.addition) {
        addition = options.addition;
      }
      if (options.additionSeparator) {
        additionSeparator = options.additionSeparator;
      }
      for (let i = 0; i < options.repeatTimes; i++) {
            el += str
            for (let j = 0; j < options.additionRepeatTimes; j++) {
              if (j !== options.additionRepeatTimes - 1) {
                el += options.addition + options.additionSeparator
              } else {
                el += options.addition 
              }
             
              
            }
            if (i !== options.repeatTimes - 1) {
              el += separator
            } 
      }
      return el
    }


    if (options.repeatTimes && options.addition && options.additionRepeatTimes) {
      for (let i = 0; i < options.repeatTimes; i++) {
        el += str
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (j !== options.additionRepeatTimes - 1) {
            el += options.addition + '|'
          } else {
            el += options.addition 
          }
         
          
        }
        if (i !== options.repeatTimes - 1) {
          el += '+'
        } 
  }
      return el
    }


    if (options.repeatTimes && options.addition) {
      debugger
      let separator = '+'
      if (options.separator) {
        separator = options.separator;
      }
      for (let i = 0; i < options.repeatTimes; i++) {
            if (i !== options.repeatTimes - 1) {
              el += str + options.addition + separator
            } else {
              el +=  str + options.addition 
            }  
      }
      return el
    }
    if (options.repeatTimes === 1) {
      return str
    }

    if (options.separator && options.addition && options.additionSeparator) {
      el = str + options.addition;
      return el;
    }


    if (options.repeatTimes && options.separator && options.addition && options.additionRepeatTimes) {
      debugger
      let separator = '+'
      if (options.separator) {
        separator = options.separator;
      }
      for (let i = 0; i < options.repeatTimes; i++) {
            if (i !== options.repeatTimes - 1) {
              el += str + options.addition + separator
            } else {
              el +=  str + options.addition 
            }  
      }
      return el
    }


    if (options.repeatTimes > 1) {
      let separator = '+'
      if (options.separator) {
        separator = options.separator;
      }
      for (let i = 0; i < options.repeatTimes; i++) {
            if (i !== options.repeatTimes - 1) {
              el += str + separator
            } else {
              el += str
            }  
      }
    }
    return el
  }
}

module.exports = {
  repeater
};

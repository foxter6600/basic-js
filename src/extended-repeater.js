const { NotImplementedError } = require('../extensions/index.js')

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
  let resStr = ''
  let add = ''
  let inStr = str
  if (typeof inStr != 'string') {
    inStr = inStr + ''
  }
  let separator = '+'
  if (options.hasOwnProperty('separator') != false) {
    separator = options.separator
  }
  let additionSeparator = '|'
  if (options.hasOwnProperty('additionSeparator') != false) {
    additionSeparator = options.additionSeparator
  }

  let repeatCounter = options.hasOwnProperty('repeatTimes') === false ? 0 : options.repeatTimes
  if (options.hasOwnProperty('addition') === false) {
    if (repeatCounter === 0) {
      resStr = inStr
      console.log(resStr)
      return resStr
    } else {
      for (let i = 0; i < repeatCounter - 1; i++) {
        resStr += inStr + separator
      }
      resStr += inStr
      console.log(resStr)
      return resStr
    }
  } else {
    addition = options.addition
    if (repeatCounter === 0) {
      if (options.additionRepeatTimes > 1) {
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
          add += addition + additionSeparator
        }
        add += addition
        resStr = inStr + add
        console.log(resStr)
        return resStr
      } else {
        add += addition
        resStr = inStr + add
        console.log(resStr)
        return resStr
      }
    } else {
      if (options.additionRepeatTimes > 1) {
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
          add += addition + additionSeparator
        }
        add += addition
        for (let i = 0; i < repeatCounter - 1; i++) {
          resStr += inStr + add + separator
        }
        resStr += inStr + add
        console.log(resStr)
        return resStr
      } else {
        add += addition
        for (let i = 0; i < repeatCounter - 1; i++) {
          resStr += inStr + add + separator
        }
        resStr += inStr + add
        console.log(resStr)
        return resStr
      }
    }
  }
}

module.exports = {
  repeater,
}

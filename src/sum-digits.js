const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  console.log(n.toString().split(''))
  let digit = n
    .toString()
    .split('')
    .reduce((acc, cur) => {
      acc += Number(cur)
      return acc
    }, 0)
  if (digit < 10) {
    return digit
  } else {
    while (digit > 9) {
      digit = digit
        .toString()
        .split('')
        .reduce((acc, cur) => {
          acc += Number(cur)
          return acc
        }, 0)
    }
  }
  return digit
}

module.exports = {
  getSumOfDigits,
}

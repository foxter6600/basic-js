const { NotImplementedError } = require('../extensions/index.js')

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
  let arr = [...('' + n)].map(Number)
  let minIndex = arr.indexOf(Math.min(...arr))
  let maxIndex = arr.indexOf(Math.max(...arr))
  if (minIndex > maxIndex && maxIndex != 0) {
    arr.splice(maxIndex - 1, 1)
  } else {
    arr.splice(minIndex, 1)
  }
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit,
}

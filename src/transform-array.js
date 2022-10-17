const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'number') {
        resArr.push(arr[i])
      } else if (arr[i] === '--discard-next') {
        if (arr[i + 1] != undefined) {
          i++
          i++
        }
      } else if (arr[i] === '--discard-prev') {
        if (resArr.length >= 1) {
          resArr.pop()
        }
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1] != undefined) {
          resArr.push(arr[i + 1], arr[i + 1])
          i++
        }
      } else if (arr[i] === '--double-prev') {
        if (resArr.length >= 1) {
          resArr.push(resArr[resArr.length - 1])
        }
      } else {
        resArr.push(arr[i])
      }
    }
    return resArr
  }
  throw Error(`'arr' parameter must be an instance of the Array!`)
}

module.exports = {
  transform,
}

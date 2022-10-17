const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newArr = []
  for (let i = 0; i < matrix.length; i++) {
    newArr.push(...matrix[i])
  }
  return newArr.filter((e) => e === '^^').length
}

module.exports = {
  countCats,
}

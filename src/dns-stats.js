const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = domains.reduce(function (acc, el) {
    let splitArr = el.split('.')
    if (splitArr.length == 3) {
      let firstProp = `.${splitArr[2]}.${splitArr[1]}.${splitArr[0]}`
      let secondProp = `.${splitArr[2]}.${splitArr[1]}`
      let thirdProp = `.${splitArr[2]}`
      acc.hasOwnProperty(thirdProp) == false ? (acc[thirdProp] = 1) : (acc[thirdProp] += 1)
      acc.hasOwnProperty(secondProp) == false ? (acc[secondProp] = 1) : (acc[secondProp] += 1)
      acc.hasOwnProperty(firstProp) == false ? (acc[firstProp] = 1) : (acc[firstProp] += 1)
    } else {
      let secondProp = `.${splitArr[1]}.${splitArr[0]}`
      let firstProp = `.${splitArr[1]}`
      acc.hasOwnProperty(secondProp) == false ? (acc[secondProp] = 1) : (acc[secondProp] += 1)
      acc.hasOwnProperty(firstProp) == false ? (acc[firstProp] = 1) : (acc[firstProp] += 1)
    }
    return acc
  }, {})
  console.log(res)
  return res
}

module.exports = {
  getDNSStats,
}

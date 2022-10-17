const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  str: '',
  getLength() {
    console.log(this.chain.length)
    return this.chain.length
  },
  addLink(value) {
    if (typeof value == undefined) {
      this.chain.push(`( )~~`)
    } else {
      this.chain.push(`( ${value + ''} )~~`)
    }
    return this
  },
  removeLink(position) {
    if (typeof position === 'number') {
      this.chain.splice(this.chain[position], 1)
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  toStr() {
    this.chain.forEach((e) => {
      this.str = this.str + e
    })

    return this
  },
  strSlice() {
    this.str = this.str.slice(0, this.str.length - 2)
    return this
  },
  finishChain() {
    this.toStr()
    this.strSlice()
    console.log(this.str)
  },
}

module.exports = {
  chainMaker,
}

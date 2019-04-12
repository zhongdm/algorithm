const Queue = require('./queue.js')

/**
 * 循环队列
 */
class LoopQueue extends Queue {
  constructor () {
    super()
  }

  find (index) {
    return !this.items.isEmpty ? this.items[this.getIndex(index)] : null
  }

  getIndex (index) {
    return index > this.items.length ? (index % this.items.length) : index
  }

}

module.exports = LoopQueue

const Queue = require('./queue.js')

/**
 * 优先队列
 * 继承自Queue
 * 重写了入队方法
 */
class PriorityQueue extends Queue {
  constructor () {
    super()
  }

  enqueue (element, priority) {
    const priorityElement = { element, priority }
    let insertIndex = -1
    insertIndex = this.items.findIndex(function(item) {
      return item.priority > priority
    })
    return this.items.splice(insertIndex > -1 ? insertIndex : this.items.length, 0, priorityElement)
  }

}

module.exports = PriorityQueue

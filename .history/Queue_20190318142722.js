function Queue () {
  this.queueData = {}
  this.enQueue = enQueue
  this.deQueue = deQueue
}

/**
 * 入队
 */
function enQueue (element) {
  this.queueData.push(element)
}

/**
 * 出对
 */
function deQueue () {
  this.queueData.shift()
}

export default Queue
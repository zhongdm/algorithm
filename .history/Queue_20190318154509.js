/**
 * 队列算法
 * @param {*} l 
 */
function Queue (l) {
  this.size = l ? l : 0
  this.queueData = []
  this.enQueue = enQueue
  this.deQueue = deQueue
  this.isEmpty = isEmpty
  this.isFull = isFull
  this.head = head
  this.tail = tail
  this.clearQueue = clearQueue
  this.toString = toString
}

/**
 * 入队
 */
function enQueue (element) {
  if (this.isFull()) {
    return false
  }
  this.queueData.push(element)
  return true
}

/**
 * 出队
 */
function deQueue () {
  if (this.isEmpty()) {
    return false
  }
  this.queueData.shift()
  return true
}

/**
 * 判断队列数组是否为空
 */
function isEmpty () {
  return this.queueData.length === 0
}

/**
 * 判断队列是否占满
 */
function isFull () {
  return this.queueData.length === this.size
}

/**
 * 队列头部元素
 */
function head () {
  return this.queueData[0]
}

/**
 * 队列尾部元素
 */
function tail () {
  return this.queueData[this.queueData.length - 1]
}

/**
 * 清空队列
 */
function clearQueue () {
  this.queueData = []
  return true
}
function toString(){
  let retStr = ""
  for (let i = 0, len = this.queueData.length; i < len; i++) {
    retStr += this.queueData[i] + (i === len - 1 ? '' : ',')
  }
  return retStr
}

// export default Queue
module.exports = Queue
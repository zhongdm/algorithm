function Queue (l) {
  this.length = l ? l : 0
  this.queueData = []
  this.enQueue = enQueue
  this.deQueue = deQueue
  this.isEmpty = isEmpty
  this.head = head
  this.tail = tail
  this.toString = toString
}

/**
 * 入队
 */
function enQueue (element) {
  return isFull() ? this.queueData : this.queueData.push(element)
}

/**
 * 出队
 */
function deQueue () {
  return this.queueData.shift()
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
  console.log(this.queueData.length)
  return this.queueData.length === this.length
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

function toString(){
  var retStr = "";
  for (let i = 0, len = this.queueData.length; i < len; i++) {
    retStr += this.queueData[i] + (i === len - 1 ? '' : ',')
  }
  return retStr;
}

// export default Queue
module.exports = Queue
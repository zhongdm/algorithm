function Queue () {
  this.queueData = []
  this.enQueue = enQueue
  this.deQueue = deQueue
  this.isEmpty = isEmpty
  this.toString = toString
}

/**
 * 入队
 */
function enQueue (element) {
  return this.queueData.push(element)
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

function toString(){
  var retStr = "";
  for (let i = 0, len = this.queueData.length; i < len; i++) {
    retStr += this.queueData[i] + (i === len - 1 ? '' : ',')
  }
  return retStr;
}

// export default Queue
module.exports = Queue
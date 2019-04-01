function Queue () {
  this.queueData = []
  this.enQueue = enQueue
  this.deQueue = deQueue
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

function toString(){
  var retStr = "";
  for (var i=0; i<this.queueData.length; ++i) {
    retStr += this.queueData[i] + "&nbsp;"
  }
  console.log('aa', retStr)
  return retStr;
}

// export default Queue
module.exports = Queue
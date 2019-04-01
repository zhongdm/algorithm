function Queue () {
  this.queueData = []
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

function toString(){
  var retStr = "";
  for (var i=0; i<this.queueData.length; ++i) {
    retStr += this.queueData[i] + "&nbsp;"
  }
  return retStr;
}

// export default Queue
module.exports = Queue
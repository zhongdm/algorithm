const Queue = require('./Queue.js')

let q = new Queue(3)
console.log( q.enQueue(1))
q.enQueue(12)
console.log(q.toString())
q.clearQueue()
console.log(q.toString())

/**
 * 打开转盘锁
 */
function openLock () {
  
}
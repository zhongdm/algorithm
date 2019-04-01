const Queue = require('./Queue.js')

let q = new Queue(3)
console.log( q.enQueue(1))
q.enQueue(12)
console.log(q.toString())
q.clearQueue()
console.log(q.toString())

let deadends = ['0123', '']
let target = '0302'
/**
 * 打开转盘锁
 */
function openLock (deadends, target) {

}
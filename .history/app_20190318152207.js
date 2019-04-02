const Queue = require('./Queue.js')

let q = new Queue()
console.log(q.length)
q.enQueue(1)
q.enQueue(1)

console.log(q.toString())
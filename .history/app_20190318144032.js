const Queue = require('./Queue.js')

let q = new Queue()
q.enQueue(1)
q.enQueue(2)
console.log(q.toString())
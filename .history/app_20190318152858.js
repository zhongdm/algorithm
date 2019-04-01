const Queue = require('./Queue.js')

let q = new Queue()
console.log(q)
q.enQueue(1)
q.enQueue(12)
console.log(q.head())
// console.log(q.toString())
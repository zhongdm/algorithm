const express = require('express')
const Stack = require('./src/class/stack.js')
const PriorityQueue  = require('./src/class/priorityQueue.js')
const LoopQueue = require('./src/class/loopQueue.js')
const app = express()

app.use(express.static('src'))
app.get('/', (req, res) => {
  const stack = new Stack()
  stack.push('111')
  stack.push('222')
  // res.send(stack)

  const pQueue = new PriorityQueue()
  pQueue.enqueue('qqq', 1)
  pQueue.enqueue('qqq2', 13)
  pQueue.enqueue('qqq3', 2)
  // res.send(pQueue+ "   " + pQueue.isEmpty)

  const loopQueue = new LoopQueue()
  loopQueue.enqueue('a1')
  loopQueue.enqueue('a2')
  loopQueue.enqueue('a3')
  loopQueue.enqueue('a4')
  console.log(loopQueue.size, loopQueue.find(6))

  res.send(loopQueue.find(6))
})

app.listen(3000, () => {console.log('example is running on port 3000')})

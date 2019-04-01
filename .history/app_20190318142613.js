<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>队列</title>
</head>
<body>
  <pre>
    let queue = [1, 2, 3, 4, 5]
queue.push(6)
  </pre>
  <div id="result"></div>
</body>
<script>
let queue = [1, 2, 3, 4, 5]
console.group('====队列（push/shift, unshift/pop）====')
console.log('入队前: ', queue)
queue.push(6)
console.log('入队后: ', queue)
queue.shift()
console.log('出队后: ', queue)
console.groupEnd()

let stack = [1, 2, 3, 4, 5]
console.group('====栈====')
console.log('入栈前: ', stack)
stack.push(6)
console.log('入栈后:', stack)
stack.pop()
console.log('出栈后:', stack)
document.getElementById('result').innerHTML = 'queue: ' + queue
</script>
</html>
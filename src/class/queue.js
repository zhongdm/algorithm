class Queue {
  constructor () {
    this.items = []
  }

  /**
   * 入队
   */
  enqueue (item) {
    return this.items.push(item)
  }

  /**
   * 出队
   */
  dequeue () {
    return this.items.shift()
  }

  /**
   * 队首
   */
  head () {
    return this.items[0]
  }

  /**
   * 队末
   */
  tail  () {
    return this.items[this.items.length - 1]
  }

  /**
   * 队列的尺寸
   */
  get size () {
    return this.items.length
  }

  /**
   * 清空队列
   */
  clear () {
    this.items = []
  }

  /**
   * 是否为空
   */
  get isEmpty () {
    return !this.items.length
  }

  /**
   * 队列结果
   */
  value () {
    return this.items
  }

}

// export default Queue
module.exports = Queue

class Stack {
  /**
   * constructor 构造函数
   */
  constructor () {
    this.stackItems = []
  }

  /**
   * 入栈
   */
  push (item) {
    this.stackItems.push(item)
  }

  /**
   * 出栈
   */
  pop () {
    this.stackItems.pop()
  }

  /**
   * 栈末位
   */
  get peek () {
    return this.stackItems[this.stackItems.length - 1]
  }

  /**
   * 是否为空栈
   */
  get isEmpty () {
    return !this.stackItems.length
  }

  /**
   * 栈的尺寸
   */
  get size () {
    return this.stackItems.length
  }

  /**
   * 清空栈
   */
  clear () {
    this.stackItems = []
  }

  /**
   * 栈的值
   */
  value () {
    return this.stackItems
  }
}

// export default Stack
module.exports = Stack

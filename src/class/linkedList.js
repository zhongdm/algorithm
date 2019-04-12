/**
 * 单向链表
 * 
 * 
 */

/**
 * 节点
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  /**
   * 追加节点
   * @param {*} element 
   */
  append (element) {
    const node = new Node(element)
    if (this.head) {
      let current = this.head
      // 循环一直到最后一个节点
      while(current.next) {
        current = current.next
      }
      current.next = node
    } else {
      this.head = node
    }
    this.length++
  }
  
  /**
   * 任意位置插入节点
   */
  insertNode (position, element) {
    if (position <= this.length && position >= 0) {
      const node = new Node(element)
      if (position === 0) {
        node.next = this.head
        this.head = node
      }else {
        let current = this.head
        let previous = null
        let index = 0
        while(index++ < position) {
          previous = current
          current = current.next
        }

        node.next = previous.next
        previous.next = node
      }
    }
    this.length++
    return true
  }

  /**
   * 删除指定位置的节点
   */
  removeAt (index) {
    let next = this.head
    let current = null
    let pos = 0
    if (index < this.length && index >= 0) {
      if (index === 0) {
        this.head = next.next
        this.head.next = next.next.next
      } else {
        while (index > pos++) {
          current = next
          next = next.next
        }
        current.next =next.next
      }
      this.length--
    }
  }

  /**
   * 删除元素
   */
  removeNode (element) {
    let index = this.findIndex(element)
    this.removeAt(index)
  }

  /**
   * 寻找元素下标(对于有重复元素的，只返回第一个元素的索引)
   */
  findIndex (element) {
    let current = this.head
    let index = 0
    while(current.next) {
      if (current.element === element) {
        return index
      } else {
        current = current.next
      }
    }
    return -1
  }

  size () {
    return this.length
  }

  isEmpty () {
    return this.length === 0
  }

  toString () {
    let current = this.head
    let str = ''
    while(current) {
      str += current.element + (current.next ? ',' :'')
      current = current.next
    }
    return str
  }

}

module.exports = LinkedList
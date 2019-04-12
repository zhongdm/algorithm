class Node {
  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}
class BinarySearchTree {
  constructor () {
    this.head = null
  }

  insert(element) {
    let node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      const insertNode = (node, newNode) => {
        if (this.head === null) {
          this.head = node
        }
        if (node.element <= newNode.element) {
          if (node.next === null) {
            node.next = newNode
          } else {
            insertNode(node.next, newNode)
          }
        } else {
          if (node.prev === null) {
            node.prev = newNode
          } else {
            insertNode(node.prev, newNode)
          }
        }
      }
      
      insertNode(this.head, node)
    }
  }

  /**
   * 先序遍历
   */
  preTranverse(callback) {
    const readNode = (node, callback) => {
      callback(node.element)
      if (node.prev) {
        readNode(node.prev, callback)
      }
      if (node.next) {
        readNode(node.next, callback)
      }
    }

    readNode(this.head, callback)
  }

  /**
   * 中序遍历
   */
  midTranverse(callback) {
    const readNode = node => {
      if (node.prev) {
        readNode(node.prev)
      }
      callback(node.element)
      if (node.next) {
        readNode(node.next)
      }
    }

    readNode(this.head, callback)
  }

  /**
   * 后序遍历
   */
  nextTranverse(callback) {
    const readNode = node => {
      if (node.prev) {
        readNode(node.prev)
      }
      if (node.next) {
        readNode(node.next)
      }
      callback(node.element)
    }

    readNode(this.head, callback)
  }

  /**
   * 获取最大的值
   */
  getMaxValue () {
    const tranverse = node => {
      if (node !== null) {
        if (!!node.next) {
          return tranverse(node.next)
        }
        return node
      }
      return null
    }
    return tranverse(this.head)
  }

  /**
   * 获取最小的值
   */
  getMinValue() {
    const tranverse = node => {
      if (node !== null) {
        if (!!node.prev) {
          return tranverse(node.prev)
        }
        return node
      }
      return null
    }
    return tranverse(this.head)
  }

  /**
   * 搜索特定的值
   * @param {*} element 
   */
  search(element) {
    const selfSearch = node => {
      if (node === null) {
        return null
      }
      if (node.element === element) {
        return node
      }

      if (!!node.prev) {
        return selfSearch(node.prev)
      }

      if (!!node.next) {
        return selfSearch(node.next)
      }
    }
    return selfSearch(this.head)
  }

  /**
   * 删除节点
   * @param {*} element 
   */
  remove(element) {
    const selfRemove = node => {
      if (node === null) {
        return null
      }

      if (node.element === element) {
        if (node.prev === null && node.next === null) {
          let _node = node
          node = null
          return _node
        } else {
          console.log('该节点拥有左子树或右子树，无法删除')
          return false
        }
      }

      if (node.prev && node.element > element) {
        return selfRemove(node.prev)
      }

      if (node.next && node.element < element) {
        return selfRemove(node.next)
      }

      return false
    }
    return selfRemove(this.head)
  }

  /**
   * 树的深度
   */
  get depth() {
    const getDepth = node => {
      if (node === null) {
        return 0
      }
      let prevLength = getDepth(node.prev)
      let nextLength = getDepth(node.next)
      
      let childLength = prevLength > nextLength ? prevLength : nextLength
      return childLength + 1
    }
    return getDepth(this.head)
  }
}

module.exports = BinarySearchTree
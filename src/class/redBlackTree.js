const BinarySearchTree = require('./binarySearchTree')

/**
 * 树： 红黑树
 */
class RedBlackTree extends BinarySearchTree {
  constructor() {
    super()
  }

  /**
   * 寻找节点的父节点
   * @param {*} node 
   */
  _findParentNode(root, node) {
    const searchNode = parent => {
      if (root === parent && parent.element === node.element) {
        return null
      }

      if ((parent.prev && parent.prev.element === node.element)
        || (parent.next && parent.next.element === node.element)) {
        return parent
      }

      if (parent.prev) {
        return searchNode(parent.prev)
      }
      if (parent.next) {
        return searchNode(parent.next)
      }
    }

    return searchNode(root)
  }

  leftRotate (node) {
    let root = JSON.parse(JSON.stringify(this.head))
    if (node.next) {
      // 寻找node的父节点
      let parentNode = this._findParentNode(root, node)
      

      // 临时保存node节点
      let _node = JSON.parse(JSON.stringify(node))
      // node的next节点 -> node的父节点
      parentNode.next = node.next
      // node的next的左节点 -> node的右节点
      if (_node.next.prev) {
        _node.next = _node.next.prev
      }
      // node节点 -> node的next节点的左节点
      parentNode.next.prev = _node
      return root
    }
  }

  rightRotate (node) {
    let root = JSON.parse(JSON.stringify(this.head))
    if (node.prev) {
      // 寻找node的父节点
      let parentNode = this._findParentNode(root, node)
      // 临时保存node节点
      let _node = node
      // node的next节点 -> node的父节点
      parentNode.next = node.next
      // node的next的左节点 -> node的右节点
      if (_node.next.prev) {
        _node.next = _node.next.prev
      }
      // node节点 -> node的next节点的左节点
      parentNode.next.prev = _node
      return root
    }
  }
}

module.exports = RedBlackTree

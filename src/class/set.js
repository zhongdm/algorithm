/**
 * 自定义实现Set类
 */

class Set {
  constructor () {
    this.items = []
  }

  add (element) {
    if (!this.has(element)) {
      this.items.push(element)
      return this.items
    }
    return false
  }

  delete (element) {
    if (this.has(element)) {
      // delete this.items[element]
      let index = this.items.indexOf(element)
      this.items.splice(index, 1)
      return true
    }
    return false
  }

  has (element) {
    return this.items.indexOf(element) !== -1
    // return this.items.hasOwnProperty(element)
  }

  clear () {
    this.items = []
  }

  get size () {
    return this.items.length
  }

  get values () {
    return Object.keys(this.items)
  }

  toString() {
    return this.items
  }

  /**
   * 并集
   * @param {*} set 
   */
  union (set) {
    let unionSet = []
    this.items.forEach(element => {
        unionSet.push(element)
    });
    set.items.forEach(element => {
      if (unionSet.indexOf(element) === -1) {
        unionSet.push(element)
      }
    });

    return unionSet
  }

  /**
   * 交集
   * @param {*} set 
   */
  intersetion (set) {
    let inSet = []
    this.items.forEach(element => {
      if (set.items.indexOf(element) !== -1) {
        inSet.push(element)
      }
    });
    return inSet
  }

  /**
   * 差集
   * @param {*} set 
   */
  difference (set) {
    let dfSet = []
    this.items.forEach(element => {
      if (set.items.indexOf(element) === -1) {
        dfSet.push(element)
      }
    })
    
    return dfSet
  }

  /**
   * 子集: A是B的子集
   * @param {*} set 
   */
  subset (set) {
    if (this.items.size > set.items.size) {
      return false
    } else {
      return this.items.every(element => {
        return set.items.includes(element)
      })
    }
  }

}

module.exports = Set
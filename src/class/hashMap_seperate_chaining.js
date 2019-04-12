/**
 * 分离链接法（seperate chaining）
 */
const LinkedList = require('./linkedList')

class HashMapSeperate {
  constructor() {
    this.map = []
  }

  static _loseloseHashMap (key) {
    let hashKey = 0
    for (let k of key) {
      hashKey += k.charCodeAt()
    }
    return hashKey % 37
  }

  put(key, value) {
    const pos = HashMapSeperate._loseloseHashMap(key)
    if (!this.map[pos]) {
      this.map[pos] = new LinkedList()
    }
    this.map[pos].append({key, value})
  }

  get(key) {
    const pos = HashMapSeperate._loseloseHashMap(key)
    if (this.map[pos] === undefined) {
      return undefined
    }
    let current = this.map[pos].head
    let value = ''
    while(current.next) {
      if (current.element.key === key) {
        value = current.element.value
        break
      }
      current = current.next
    }
    value = current.element.key === key ? current.element.value : value
    return value
  }

  remove(key) {
    const pos = HashMap._loseloseHashMap(key)
    delete this.map[pos]
  }

}

module.exports = HashMapSeperate
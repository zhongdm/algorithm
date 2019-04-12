/**
 * 字典/映射
 * 以{key: value}的形式存储数据，
 */
class Dictionary {
  constructor () {
    this.items = {}
  }

  set(key, value) {
    this.items[key] = value
    return this.items
  }

  get(key) {
    return this.items[key]
  }

  get keys() {
    return Object.keys(this.items)
  }

  get values() {
    return this.keys.map(ele => {
      return this.items[ele]
    })
  }

  remove(key) {
    delete this.items[key]
  }

}

module.exports = Dictionary

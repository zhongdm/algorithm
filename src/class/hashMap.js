/**
 * 散列,字典的一种
 * HashMap/HashTable类
 * 弊端：散列值一样的时候，之前的数据会被覆盖（Mindy 和 Paul）
 */
class HashMap {
  constructor () {
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
    const pos = HashMap._loseloseHashMap(key)
    this.map[pos] = value
    // return this.map[pos] = value
  }

  get(key) {
    const pos = HashMap._loseloseHashMap(key)
    return this.map[pos]
  }

  remove(key) {
    const pos = HashMap._loseloseHashMap(key)
    delete this.map[pos]
  }

}

module.exports = HashMap
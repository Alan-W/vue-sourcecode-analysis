module.exports = class ObserverList {
  constructor() {
    this.observerList = []
  }

  add(obj) {
    return this.observerList.push(obj)
  }

  empty() {
    this.observerList = []
  }

  count() {
    return this.observerList.length
  }

  get(index) {
    return this.observerList[index]
  }

  insert(obj, index) {
    let pointer = -1
    if (!index || index === this.observerList.length) {
      this.observerList.splice(index, 0, obj)
      pointer = index
    }
    return pointer
  }

  indexAt(obj, startIndex) {
    let i = startIndex, pointer =-1
    while(i < this.observerList.length) {
      if(obj === this.observerList[i]) {
        pointer = i
      }
      i++
    }
    return pointer
  }

  removeAt(index) {
    this.observerList.splice(index, 1)
  }
}
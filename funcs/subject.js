const ObserverList = require('./observer-list')
module.exports = class Subject {
  constructor() {
    this.observers = new ObserverList()
  }

  addObserver(observer) {
    this.observers.add(observer)
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexAt(observer, 0))
  }

  notify(ctx) {
    for(let i = 0; i < this.observers.count(); i++) {
      this.observers.get(i).update(ctx)
    }
  }
}
const Observer = require('./observer')
const Subject = require('./subject')

const subInstance = new Subject()
class ObserverA extends Observer {
  constructor(name) {
    super(name)
  }
  update() {
    console.log(`${this.name}: 带伞`)
  }
}

class ObserverB extends Observer {
  constructor(name) {
    super(name)
  }
  update() {
    console.log(`${this.name}: 带雨衣`)
  }
}

class ObserverC extends Observer {
  constructor(name) {
    super(name)
  }
  update() {
    console.log(`${this.name}: 大头大头，下雨不愁`)
  }
}
subInstance.addObserver(new ObserverA('A'))
subInstance.addObserver(new ObserverB('B'))
subInstance.addObserver(new ObserverC('C'))
subInstance.notify("今天可能要下雨")
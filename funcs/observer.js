module.exports = class Observer {
  constructor(name) {
    this.name = name
  }

  update(ctx) {
    // ...具体更新逻辑
    console.log(`${this.name}: ${ctx}`);
  }
}
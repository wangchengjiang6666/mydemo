// 自己实现一个 中央事件处理器

class Events {
  constructor() {
    this.deps = {};
  }

  /**
   * 监听事件
   * @param {String} eventName 事件名字
   * @param {Function} callback 事件回调函数
   */
  $on(eventName, callback) {
    // 1. 首先判断this.deps中 evnetName 这个事件是否已经添加过了？
    if (!this.deps[eventName]) {
      // 不存在
      this.deps[eventName] = [];
    }

    this.deps[eventName].push(callback);
  }

  /**
   * 触发事件
   * @param {String} eventName 事件名字
   * @param {Object} params 事件参数
   */
  $emit(eventName, params) {
    // 1. 判断 eventName 这个事件是否存在
    if (this.deps[eventName]) {
      // 存在
      this.deps[eventName].forEach(cb => {
        cb(params);
      });
    }
  }
}

export default Events;

// $emit("abc", { name: "张三", age: 19 });

// $on('abc', () => {})
// $on('abc', () => {})
// // $on("xxx", () => {});

// this.deps = {
//   abc: [cb, cb]
// }

// this.deps['abc'].forEach(cb => {
//   cb();
// })

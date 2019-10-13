# vuex

#### vue 中组件之间的通信方式

1. 父 -> 子 prop
2. 子 -> 父 \$emit 触发自定义事件
3. 其他方式 中央事件管理器
4. ？如果是路由页面组件 ？ vuex

#### vuex 的简介

vue 官方提供的 状态管理器
整个项目中需要在多个地方共享的数据存放在统一的位置进行管理。

#### 什么时候需要使用 vuex

1. 怕掉头发的时候
2. 使用了 vue-router 。并且多个页面之间需要共享数据的时候

#### 展开运算符 ...

```js
let obj1 = { name: '张三', age: 18 };
...obj1; // name: "张三", age: 18
let obj2 = { ...obj1 }
```

引用数据类型的问题 ？浅拷贝与深拷贝的区别 ？

```js
let obj1 = { name: "张三", age: 18 };
let obj2 = obj1;
console.log(obj2); // { name: '张三', age: 18 }
console.log(obj1); // { name: '张三', age: 18 }
obj2.name = "李四";
console.log(obj2); // { name: '李四', age: 18 }
console.log(obj1); // { name: '李四', age: 18 }

// 万能的分割线
let obj1 = { name: "张三", age: 18 };
let obj2 = { ...obj1 };
console.log(obj2); // { name: '张三', age: 18 }
console.log(obj1); // { name: '张三', age: 18 }

obj2.name = "李四";
console.log(obj2); // { name: '李四', age: 18 }
console.log(obj1); // { name: '张三', age: 18 }
```

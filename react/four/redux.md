# redux

react 的第三方 状态管理器。
react 官方的状态管理器是： flux

## 纯函数的概念

reducer 就是一个接受上一次 state 数据与 action 的纯函数？

纯函数有两个特点：

1. 不能修改参数
2. 相同的输入一定会产生相同的输出
3. 不能包括异步的代码

```js
// 纯函数
function fn1(a, b) {
  return a + b;
}
```

```js
// 不纯的函数
function fn2(a, b) {
  return a + b + new Date().getTime();
}
```

```js
function fn3(a, b) {
  // 函数里中有异步代码，直接就是不纯的函数
  setTimeout(() => {
    return a + b;
  }, 1000);
}
```

## redux 核心概念

1. Component View
   react 页面
2. Action
   动作， 如果需要修改仓库的数据，必须派发一个动作。它就是一个普通的对象，必须要有一个 type 属性，其余的属性可以理解为是这个动作的 payload (负载)
   动作别派发之后，redux 的流程就到了 reducer 那块
3. Reducer
   他是一个纯函数，你也可以理解为仓库的数据变化，全部都是它来处理的。它接收两个参数，一个是上一次仓库的 state 数据，一个是这次派发的动作对象。他需要返回一个全新的 state 数据。

   特别注意：在它里面不要修改 state 数据或者 action 数据。因为它需要是一个纯函数。

4. Store
   仓库，存放 state 数据的东西。它是链接 action 与 reducer 的桥梁。他的实例对象上有一些需要记忆的方法。

   - getState() 获取当前仓库的 state 数据
   - dispatch(action) 派发一个动作
   - subscribe(cb) 监听仓库数据的变化，如果仓库数据有变化，这个回调函数就会被执行。这个返回会返回一个函数，这个函数调用就可以取消监听。

5. ActionTypes

   动作类型常量。
   如果动作类型是一个普通的字符串的话，出现 bug 将会非常的恶心。
   作用只是解决字符串写错之后，调试 bug 非常困难的问题。

6. ActionCreates

   动作生成器。
   就是一个函数，这个函数调用之后返回一个动作对象。

7. reducers 拆分

   就是将仓库的数据，按照不同的功能模块，进行拆分。
   主要使用的是 redux 的 combineReducers 这个方法

8. redux 的中间件

   注意不是 react 的中间件，是 redux 的中间件

   中间件的作用。最最重要的功能点是，实现异步代码。。

   之前动作一旦被派发，是直接去到了 reducer 的纯函数，加上中间件之后，动作派发之后，首先会经过中间件来做一些处理，处理完成之后再去到 reducer

   思考：

   1. 异步代码放到仓库的流程里面来实现的话，需要放在仓库流程的那个位置呢？
      考虑来考虑去，最后发现就是在动作那块才好做一些操作。将普通动作对象修改为动作函数。


    8.1 实现一个简单的中间件，使用它的原理性代码
    8.2 使用第三方提供的 redux-logger 中间件
          1. npm install --save redux-logger
          2. 在主仓库中 createStore 的方法中，传递 applyMidderware 去调用即可

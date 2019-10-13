/**
 * 休眠，返回的是一个 Promise 对象
 * @param {Number} time 休眠时间
 */
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
};

// const hello = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3);
//       // resolve();
//     }, 2000);
//   });
// };

// const main = async () => {
//   console.log(1);
//   await sleep(5);
//   console.log(2);
// };

// main();

export default {
  namespace: "example", // 命名空间

  state: {
    name: "张三",
    age: 18
  }, // 当前仓库模块的数据

  // subscriptions: {
  //   // 其余的一些监听源，比如监听当前时间的变化，键盘事件等。监听到之后需要修改仓库数据
  //   setup({ dispatch, history }) {
  //     // eslint-disable-line
  //   }
  // },

  // vuex 中 actions, 每一个 effect 都是一段异步代码，异步代码完成之后再去 派发一个普通的 动作
  effects: {
    // key: value
    // key -> 异步动作的名字
    // value -> 函数，接收两个参数，第一个是 action, 第二个 是 redux-saga 的一些参数
    //        这个函数，必须是一个 generator 函数
    //        这个函数，里面可以写异步的代码。但是异步代码需要是一个 Promise 对象，并且需要使用 yield
    //        这个函数，异步执行完成之后，需要你主动的去派发一个普通的动作， 使用 redux-saga 的 put 方法
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },

    *changeAgeSync(action, { put }) {
      console.log("准备做异步代码");

      yield sleep(2);

      console.log("时间已经过去2秒了");
      yield put({
        type: "changeAge",
        age: action.age
      });
    }
  },

  // vuex 中 mutations 。 每一个 reducer 都是直接去修改仓库数据的
  reducers: {
    // key: value
    // key -> 动作类型
    // value -> 函数，会接收到 state 与 action 两个参数
    //        state -> 当前仓库模块的 state 数据
    //        action -> 当前的动作对象
    //        这个函数，需要返回一个全新的 state 数据，这样才能修改我们的仓库

    save(state, action) {
      return { ...state, ...action.payload };
    },

    changeName(state, action) {
      console.log("进来了么");
      // return {
      //   ...state,
      //   ...{
      //     name: "李四"
      //   }
      // };
      return Object.assign({}, state, { name: action.name });
    },

    changeAge(state, action) {
      return Object.assign({}, state, { age: action.age });
    }
  }
};

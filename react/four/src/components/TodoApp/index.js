import React from "react";
import { addTodo, initTodo, changeInput } from "../../store/actionCreates";
import store from "../../store";

// // 对 store.dispatch 做重写，就是中间件的实现原理
// let next = store.dispatch;
// store.dispatch = action => {
//   // 1. 操作之前，干些事情
//   console.log("操作之前：", store.getState());
//   // 2. 正式操作，
//   next(action);
//   // 3. 操作之后，干些事情
//   console.log("操作之后：", store.getState());
// };

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: store.getState().todo.inputVal,
      list: store.getState().todo.list
    };

    this.unsubscribe = store.subscribe(() => {
      // 在仓库发生变化的时候，执行。
      this.setState({
        inputVal: store.getState().todo.inputVal,
        list: store.getState().todo.list
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    // ajax 请求
    fetch("http://localhost:9090/todo")
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        // 修改仓库的数据
        store.dispatch(initTodo(res));
      });
  }

  handleChange = e => {
    let value = e.target.value;
    // ? 直接复制给 state 中的 inputVal ? 还是赋值给仓库？

    // 1. 创建一个动作，就是一个包含type属性的对象
    // let action = changeInput(value);
    // 2. 派发这个动作
    store.dispatch(changeInput(value));
  };

  handleAdd = () => {
    // store.dispatch(addTodo());
    // 我需要在添加的时候输出一点日志
    store.dispatch(addTodo());
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>

        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;

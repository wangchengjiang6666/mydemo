// react组件通信
// 1. 父 -> 子    通过prop传递给子组件
// 2. 子 -> 父    通过prop传递了一个方法下去
// 3. 兄弟组件    找共有的父级组件。 实现一个中央事件管理器（发布订阅模式）
// 4. 更复杂组件
// 5. 状态管理器 （redux）

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Events from "../utils/events";

// 1. 实例化 events
let bus = new Events();

// Father
class Father extends Component {
  constructor(props) {
    super(props);
    // state初始化
    this.state = {
      name: "张三丰",
      sonName: "张小丰"
    };

    // 2. bus.$on 监听
    bus.$on("abc", params => {
      console.log("abc 事件被触发了");
      this.setState({
        name: params.name
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Father, 我的名字是 {this.state.name}</h1>
        <Son
          name={this.state.sonName}
          onChangeName={params => {
            console.log("子组件触发了xxx");
            // 直接修改我自己的 name 数据
            this.setState({
              name: params.name
            });
          }}
        ></Son>
      </div>
    );
  }
}

// Son
class Son extends Component {
  render() {
    return (
      <div>
        <p>我是 Son 我的名字是 {this.props.name}</p>
        <button onClick={this.handleClick.bind(this)}>
          点我，修改我父亲的名字
        </button>

        <button onClick={this.handleClick2}>
          点我，修改我父亲的名字，是通过 bus 的方式
        </button>
      </div>
    );
  }

  handleClick() {
    // 调用一个父组件传递过来的prop数据
    this.props.onChangeName({ name: "我的地" });
  }


  handleClick2() {
    // 触发 bus 的 abc 事件
    bus.$emit("abc", { name: "我的天" });
  }
}

ReactDOM.render(<Father></Father>, document.getElementById("app"));

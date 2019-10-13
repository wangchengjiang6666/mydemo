import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "张三丰",
      count: 1
    };
  }

  handleAddCount() {
    // setState 第一个参数如果是函数的形式，这个函数，会自动接收到两个参数，prevState props
    // 这个函数中还是需要返回一个对象。
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleChangeName() {
    this.setState(
      {
        name: "张四丰"
      },
      () => {
        console.log(this.state.name);
      }
    );
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleAddCount.bind(this)}>
          点我对 count + 5
        </button>
        <h1>我是 App 组件，我的名字是{this.state.name}</h1>
        <button onClick={this.handleChangeName.bind(this)}>点我修改名字</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

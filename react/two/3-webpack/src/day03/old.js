import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    console.log("Hello render");
    return (
      <div>
        <p>Hello</p>
        <p>{this.props.age}</p>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 判断当前的 props 跟 nextProps 是否相同。相同就可以 return false
    // 1. 取出 nextProps 中的所有 key ,组成一个集合
    // 2. 循环判断
    let flag = false; // 默认都不更新
    Object.keys(nextProps).forEach(key => {
      if (this.props[key] !== nextProps[key]) {
        flag = true; // 只要有一个不相同，就要更新
      }
    });

    return flag;

    // if (
    //   this.props.name === nextProps.name &&
    //   this.props.age === nextProps.age
    // ) {
    //   return false;
    // }
    // return true;
  }
}

class App extends React.Component {
  state = {
    name: "张三",
    age: 18
  };

  render() {
    console.log("App render");
    return (
      <div>
        <h1>我的名字是： {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({
              name: "张三",
              age: 18
            });
          }}
        >
          点我修改名字
        </button>

        <hr />
        <Hello name={this.state.name} age={this.state.age}></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

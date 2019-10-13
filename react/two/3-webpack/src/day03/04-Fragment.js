// 4中this指向的解决方式中。如果事件处理函数是绑定在子组件身上的，并且不需要传递参数。那么推荐使用
// 1. 构造函数中提前绑定
// 2. 试验性质的public class fileds 语法
// PS: 主要是为了性能方法考虑

// 先了解一些情况
// 1. 如果你的子组件继承的是普通的Component，那么父组件render时你也会render
// 2. 如果你的子组件继承的是PureComponent， 那么你只会在自己的 state 或者 接收到 props 发生了变化时才会重新render

import React, { Fragment, Component, PureComponent } from "react";
import ReactDOM from "react-dom";

class World extends PureComponent {
  render() {
    console.log("world render");
    return (
      <div>
        <p>我是 world 组件</p>
        <button onClick={this.props.onClick}>{this.props.buttonName}</button>
      </div>
    );
  }
}

class Hello extends Component {
  constructor() {
    super();

    this.state = {
      name: "hello"
    };

    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("hello render");

    return (
      <Fragment>
        <div>
          <h1>Hello, {this.state.name}</h1>

          <button
            onClick={() => {
              this.setState({
                name: "hello"
              });
            }}
          >
            点我修改 name
          </button>

          <hr />

          <World
            buttonName={this.state.name}
            onClick={this.handleClick}
          ></World>
        </div>
        <div>wo de tian</div>
      </Fragment>
    );
  }

  // handleClick() {
  //   console.log(this);
  // }
  handleClick = () => {
    console.log(this);
  };
}

ReactDOM.render(<Hello></Hello>, document.getElementById("app"));

// react 中 事件处理函数 的 this 指向问题
// 1. 在事件处理函数的表达式哪里直接使用 bind 方法来修改 this 指向
// 2. 在构造函数中提前绑定好
// 3. 使用 箭头函数 的方式， 把本来是事件处理函数的方法做成一个普通方法
// 4. 使用实验性质的 public class fileds 语法。

import React from "react";
import ReactDOM from "react-dom";

// const Button = props => {
//   return (
//     <button
//       onClick={() => {
//         props.onClick();
//       }}
//     >
//       {props.children}
//     </button>
//   );
// };

class Hello extends React.Component {
  constructor() {
    super();

    // 事件处理函数的提前绑定
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.handleClick.bind(this)}>bind的方式</button>
        <button onClick={this.handleClick}>构造函数的方式</button>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          箭头函数的方式
        </button>
        <button onClick={this.handleClick}>public class fileds 语法</button>
      </div>
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

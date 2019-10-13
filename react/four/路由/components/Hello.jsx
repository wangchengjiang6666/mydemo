import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// withRouter 是个高阶函数，
// 他接受一个组件做为参数，返回一个新的组件，并且这个新的组件中包裹着传递的那个组件，并且传递的组件中会收到3个prop数据，就是路由相关的那三个prop

class Hello extends Component {
  render() {
    return (
      <div>
        <h1 onClick={this.handleToHome}>Hello</h1>
      </div>
    );
  }

  handleToHome = () => {
    this.props.history.push("/home");
  };
}

export default withRouter(Hello);

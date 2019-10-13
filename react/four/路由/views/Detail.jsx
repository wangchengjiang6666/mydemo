import React, { Component } from "react";
import Hello from "../components/Hello";

class Detail extends Component {
  render() {
    // let {
    //   match: {
    //     params: { id }
    //   }
    // } = this.props;
    let { match } = this.props;
    return (
      <div>
        <h1>Detail</h1>
        {/* vue中可以使用 $route.params.id
            去 当前的 props 中找一找
        */}
        <p>当前水果的名字是：{match.params.id}</p>

        {/* <Hello
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
        ></Hello> */}
        {/* 上面这种疯狂传递的方式，简写如下。 */}
        {/* <Hello {...this.props}></Hello> */}

        <Hello></Hello>
      </div>
    );
  }
}

export default Detail;

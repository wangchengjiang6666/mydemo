import React from "react";
import ReactDOM from "react-dom";

// state 是组件私有的数组，可以简单理解为 vue 中 date 数据

// 为什么取名 state 呢？
// 组件有两种类型，一种 函数式组件。一种 类组件。函数式组件又称为无状态组件，类组件又称为有状态组件。

//！！！！！！！！！！ 不管是state数据还是props数据发生变化，咱们的组件就会重新渲染。具体来说，函数式组件会重新执行这个函数，类组件会重新执行类中的 render 方法

// !!!!!!!! state数据不能直接修改，需要调用 this.setState() 来修改。
// 只要state数据发生了变化，组件的 render 方法就会重新执行。

const Hello = props => {
  console.log("我是hello,被渲染了");
  return <div>我是 Hello, 我收到了一个 {props.name}</div>;
};

class App extends React.Component {
  constructor() {
    // 类组件要么不写 constructor, 如果写了的话，就必须在第一行做 super() 。super() 是调用父类的构造函数。如果不调用，会导致这个组件的实例出问题。
    super();

    // state的初始化
    this.state = {
      name: "张三丰"
    };
  }

  handleChangeName() {
    console.log("hello world");
    console.log(this);
    // this.state.name = "张四丰";
    this.setState({
      name: "张四丰"
    });
  }

  render() {
    console.log("123");
    return (
      <div>
        <Hello name={this.state.name}></Hello>
        <h1>我是 App 组件，我的名字是{this.state.name}</h1>
        <button onClick={this.handleChangeName.bind(this)}>点我修改名字</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

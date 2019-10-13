import React from "react";
import ReactDOM from "react-dom";

// 组件

// 组件2中定义方式
// 1. 函数式组件, 函数名就是组件的名字，需要首字母大写
// 2. 类组件, 类的名字就是组件的名字，需要首字母大写

// props
// 在组件标签身上写的属性或组件标签内写的东西，都会是这个组件的props数据
// props不需要事先在组件内部申明。
// 函数式组件的props就是函数的参数
// 类组件组件的props就是类的实例的 props 数据

// 1. 函数式组件
const Hello = ({ name }) => {
  return (
    <div>
      <h1>hello, {name}</h1>
    </div>
  );
};

// 2. 类组件
class World extends React.Component {
  // 必须要有 render 方法, render return 组件的模板内容
  render() {
    console.log(this.props);

    let { age } = this.props;

    return (
      <div>
        <h1>world, {age}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Hello id="box" className="box" name="张三">
      阿斯顿发送到发
    </Hello>

    <Hello name="李四"></Hello>
    <World age="18"></World>
  </div>,
  document.getElementById("app")
);

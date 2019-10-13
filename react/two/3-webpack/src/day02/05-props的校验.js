import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// props 的校验
// 要实现props的校验: 1. 还需要先安装一个模块 prop-types 。 npm install --save prop-types
//                   2. 定义组件的 propTypes 属性

// PropTypes.array 数组类型
// PropTypes.bool  布尔类型
// PropTypes.func  函数类型
// PropTypes.number 数值类型
// PropTypes.object 对象类型
// PropTypes.string 字符串类型
// PropTypes.symbol symbol类型
// PropTypes.node   数字、字符串、React元素等都可以
// PropTypes.element React元素类型
// PropTypes.elementType  指定的 React元素类型\
// PropTypes.instanceOf(Message)
// PropTypes.oneOf(['News', 'Photos']) News 与 Photos 二选一

function Message() {}

const Hello = ({ name, top, bottom }) => {
  return (
    <div>
      <h1>hello, {name}</h1>
      {top}
      {bottom}
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  top: PropTypes.element,
  bottom: PropTypes.elementType,
  msg: PropTypes.oneOf(["News", "Photos"])
};

// class World extends React.Component {

// }

// World.propTypes = {

// }

ReactDOM.render(
  <div>
    <Hello
      name="张三"
      age={123}
      top={<h1>我是不是一个react元素</h1>}
      bottom="<h1>我是不是一个react元素</h1>"
      msg="News"
    >
      阿斯顿发送到发
    </Hello>
  </div>,
  document.getElementById("app")
);

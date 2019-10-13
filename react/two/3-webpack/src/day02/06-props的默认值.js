import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// props 的默认值
// 直接设置 组件的 defaultProps 属性

const Hello = ({ name }) => {
  return (
    <div>
      <h1>hello, {name}</h1>
    </div>
  );
};

Hello.defaultProps = {
  name: "张三"
};

ReactDOM.render(
  <div>
    <Hello>阿斯顿发送到发</Hello>
  </div>,
  document.getElementById("app")
);

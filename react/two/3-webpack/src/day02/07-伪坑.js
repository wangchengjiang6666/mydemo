import React from "react";
import ReactDOM from "react-dom";

// 插槽
// 1. 在组件开始标签与闭合标签中写的内容是无法渲染到页面上去的。
// 2. 如果非要渲染呢？ 就能挖坑

// react中组件的开始标签与闭合标签中的内容，也是一个 prop 数据，叫做 children

const Hello = ({ name, top, bottom }) => {
  return (
    <div>
      {top}
      <h1>hello, {name}</h1>
      {bottom}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Hello top={<p>我是一个屁,1</p>} bottom={<p>我是一个屁,2</p>}></Hello>
  </div>
  document.getElementById("app")
);

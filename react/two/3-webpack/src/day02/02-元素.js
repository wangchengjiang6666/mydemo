import React from "react";
import ReactDOM from "react-dom";

// 每隔一秒更新页面， 利用 ReactDOM.render() 的调用

// react方式
// function tick() {
//   // 定义了一个元素变量
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // 将这个元素变量给渲染到真实的 app 节点上
//   ReactDOM.render(element, document.getElementById("app"));
// }

// setInterval(tick, 1000);

// 原生方式
function tick() {
  let app = document.getElementById("app");

  app.innerHTML = `
    <div>
      <h1>Hello, world!</h1>
      <h2>It is ${new Date().toLocaleTimeString()}.</h2>
    </div>
  `;
}

setInterval(tick, 1000);

import React from "react";
import ReactDOM from "react-dom";

// vue 与 react 做一些功能点的实现不同
// 1. 渲染数据   {{}}     {}
// 2. v-if
// 3. v-show
// 4. v-on
// 5. v-for

let isShow = false;
let list = ["apple", "banana", "orange"]; // [<li>apple</li>, <li>banana</li>, <li>orange</li>]

let html = [];
for (let i = 0; i < list.length; i++) {
  html.push(<li>{list[i]}</li>);
}

function tick() {
  ReactDOM.render(
    <div>
      {isShow ? <p>我的天</p> : null}

      <button style={{ display: isShow ? "block" : "none" }}>切换显示p</button>

      <button onClick={fn1}>点我</button>

      {/* <ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul> */}

      {/* <ul>{html}</ul> */}

      <ul>
        {list.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>,
    document.getElementById("app")
  );
}

function fn1() {
  isShow = !isShow;
  tick();
}

tick();

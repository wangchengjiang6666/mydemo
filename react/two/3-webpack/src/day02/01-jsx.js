import React from "react";
import ReactDOM from "react-dom";

let msg = "我的天";
let str = "<h1>我是一个h1</h1>";

// hello 这个变量称之为 元素变量，它的值是一个 react元素|jsx代码|虚拟dom元素
let hello = (
  <p id="box" className="box" title="box">
    <span>1</span>
    <span>2</span>
  </p>
);
console.log(hello); // 对象的格式

ReactDOM.render(
  <div>
    <p dangerouslySetInnerHTML={{ __html: str }}></p>

    <p className="box" title={msg} style={{ color: "red" }}>
      {msg}
    </p>
    <input type="text" id="abc" />
    <span></span>
    <label htmlFor="abc">用户名</label>
  </div>,
  document.getElementById("app")
);

// JSX 的特点：
// 1. jsx只能有一个根元素
// 2. 标签必须都有闭合
// 3. img 标签必须要含有 alt 属性
// 4. 普通标签都是小写字母，组件标签首字母大写
// 5. class -> className
// 6. for -> htmlFor
// 7. style 属性必须写成对象形式
// 8. 表达式采用单花括号
// 9. 需要将html解析的话，需要使用 dangerouslySetInnerHTML 属性
// 10. jsx是个语法糖
// 11. {false} {null} {undefined} {true} 这些都是正确的表达式，但是不会渲染任何东西
// 12. 如果需要换行显示，那么要将这一段jsx代码使用 小括号给包裹起来

// ？ 不使用 jsx 行不行？

// ？react元素是什么？
// react元素就是一段jsx代码，就是一个虚拟dom对象

// ？虚拟dom对象是怎么样创建出来的？
// React.createElement()

// ?什么叫做元素变量?
// 从最根本来说的话，变量的值是一个虚拟dom对象，那么这个变量就是元素变量

// ？虚拟dom对象中有哪些东西？
// 1. type  标签
// 2. ref   标记
// 3. props 标签身上的属性集合.
// 4. props.children 属性, 这个标签的子元素。如果子元素有多个，那么它是数组格式

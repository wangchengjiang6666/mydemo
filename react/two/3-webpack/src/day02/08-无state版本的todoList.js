// 没有 state 的 TodoList 功能

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

let todoList = [];

// 添加操作
const addTodo = () => {
  console.log(123);
  // 1. 获取输入框的文本内容
  let value = document.getElementById("myInput").value;
  // 2. 将 value push 到 todoList 中
  todoList.push(value);
  // 3. 需要重新渲染
  render();
};

const delTodo = index => {
  console.log("删除");
  console.log(index);
  // 1. 从参数中获取下标
  // 2. 删除 todoList 中对应下标的数据
  todoList.splice(index, 1);
  // 3. 重新渲染
  render();
};

const TodoApp = ({ todos }) => {
  return (
    <div className="todo">
      <div className="top">
        <input type="text" id="myInput" />
        <button onClick={addTodo}>添加</button>
      </div>
      <ul className="list">
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              <button onClick={delTodo.bind(null, index)}>&times;</button>
            </li>
          );
        })}

        {/* <li>吃饭</li>
        <li>睡觉</li>
        <li>打逗逗</li> */}
      </ul>
    </div>
  );
};
TodoApp.propTypes = {
  todos: PropTypes.array
};

// 渲染的方法
const render = () => {
  ReactDOM.render(
    <div>
      <TodoApp todos={todoList}></TodoApp>
    </div>,
    document.getElementById("app")
  );
};

// 默认调用一次
render();

// ?为什么事件传参需要使用bind方法?
// 不能直接加括号传参，这样的话，相当与是直接调用了方法。最终传递给 onClick 将是 undefind

// ?能用bind.那能不能用 aplly call ?
// 不能，这两个是立即调用。而bind是生成一个新的函数

// ?除了bind还有哪些使用方式?
//

import React from "react";
import Two from "./Two";

// 1. 引入 context 实例的消费者组件
import { Consumer } from "../context/index";

const One = props => {
  return (
    // 消费者组件，需要在开始标签与闭合标签中传递一个函数，函数返回一个组件
    <Consumer>
      {value => {
        console.log(value);

        return (
          <div>
            <p>我是 One - 我的父亲是 {value}</p>

            <Two></Two>
          </div>
        );
      }}
    </Consumer>
  );
};

export default One;

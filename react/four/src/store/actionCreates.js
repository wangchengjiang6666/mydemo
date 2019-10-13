// 提供一些动作生成的函数，并暴露出去
import { ADD_TODO, INIT_TODO, CHANGE_INPUTE } from "./actionTypes";

export const addTodo = () => {
  // 返回一个动作。
  return {
    type: ADD_TODO
  };
};

export const changeInput = value => {
  return {
    type: CHANGE_INPUTE,
    value
  };
};

/**
 * 初始化 todo 的数据
 * @param {Array} list todo集合
 */
export const initTodo = list => {
  return {
    type: INIT_TODO,
    list
  };
};

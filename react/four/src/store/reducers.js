// 主reducers 。使用 combineReducers 来做合并拆分的 reducer 的工作

// 1. 引入 combineReducers

import { combineReducers } from "redux";

// 2. 引入拆分出去的 reducer 函数

import cartReducer from "./modules/cartReducer";
import todoReducer from "./modules/todoReducer";

// 3. 调用 combineReducers 这个方法。 并且将返回值给暴露出去，返回值是一个 主 reducers 函数
export default combineReducers({
  cart: cartReducer,
  todo: todoReducer
});

// {
//   a: {
//     cartList: []
//   },

//   b: {
//     inputVal: '',
//     list:[]
//   }
// }

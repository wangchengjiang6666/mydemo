// 仓库的主reducer。需要干的事情是合并拆分出去的那些 reducer

// 1. 引入拆分出去的 reducer
import cartReducer from "./modules/cartReducer";
import todoReducer from "./modules/todoReducer";

// 2. 暴露一个纯函数
export default (state = {}, action) => {
  return {
    cart: cartReducer(state.cart,action),
    todo: todoReducer(state.todo, action)
  };
};

// 仓库的结构，变成了下面这样
// {
//   inputVal: '',
//   list: [],
//   cartList: []
// }

// {
//   todo: {
//     inputVal: '',
//     list: []
//   },

//   cart: {
//     cartList: []
//   }
// }

// 是购物车仓库模块

const defaultState = {
  cartList: [
    {
      id: 1,
      name: "萝卜",
      price: 10,
      num: 2
    },
    {
      id: 2,
      name: "青菜",
      price: 20,
      num: 3
    }
  ]
};

export default (state = defaultState, action) => {
  return state;
};

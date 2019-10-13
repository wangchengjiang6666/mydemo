// 拆分出来的 商品模块的 仓库数据

export default {
  namespaced: true,

  state: {
    // 商品数据
    list: [
      { id: 1, name: "apple", price: 10 },
      { id: 2, name: "banana", price: 20 },
      { id: 3, name: "orange", price: 30 }
    ]
  },

  getters: {},

  mutations: {
    add() {
      console.log("product add");
    }
  },

  actions: {}

  // modules: {}
};

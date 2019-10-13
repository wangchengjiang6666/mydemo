// 拆分出来购物车模块的仓库数据

let cats = window.localStorage.getItem("cats");

export default {
  namespaced: true,
  state: {
    // 购物车的数据
    msg: "hello world",
    cats: cats ? JSON.parse(cats) : [],
    checkedIds: [] // 勾选上的商品id集合
  },

  getters: {
    // 是否全选
    isAllCheck(state) {
      return state.cats.length === state.checkedIds.length;
    },
    // 勾选上的商品总价，基于 state.cats 与 state.checkedIds
    total(state) {
      // 1. 从 cats 中过滤出商品id 在 checkedIds 中的数据
      let checkedGoods = state.cats.filter(item => {
        return state.checkedIds.indexOf(item.id) > -1;
      });

      // 2. 从 checkedGoods 将他们的每一项的 totalPrice 相加
      let num = 0;
      checkedGoforEachods.(item => {
        num += item.totalPrice;
      });

      return num;
    }
  },

  mutations: {
    // 全选与反选
    toggleCheck(state, payload) {
      if (payload) {
        // 全选， 只需要将 state.cats 中每一项的 id 拿出来放到  state.checkedIds 中
        // 吧某个数组对象中的每一项对象的某个属性，全部拿出来可以使用那个方法？ map
        let ids = state.cats.map(item => item.id);
        state.checkedIds = ids;
      } else {
        // 反选，取消全选
        state.checkedIds = [];
      }
    },

    setMsg(state, payload) {
      state.msg = payload;
    },

    setCheckedIds(state, payload) {
      state.checkedIds = payload;
    },

    /**
     * 向购物车中添加商品
     */
    add(state, payload) {
      // payload 就是当前需要添加到购物车的商品数据对象 {id: , name: , price}
      // 1. 首先判断当前选择的商品是否已经在购物车中存在了？  findIndex
      let index = state.cats.findIndex(item => {
        return item.id === payload.id;
      });
      if (index > -1) {
        // 存在
        let obj = state.cats[index];
        obj.num++;
        obj.totalPrice += obj.price;
      } else {
        // 不存在 ，将当前商品push到购物车中即可
        let obj = { ...payload };
        obj.num = 1;
        obj.totalPrice = obj.price;
        state.cats.push(obj);
      }

      // 弄到 本地 localStorage 中去
      window.localStorage.setItem("cats", JSON.stringify(state.cats));
    },

    /**
     * 减
     */
    jian(state, payload) {
      // 1. 得到下标
      let index = state.cats.findIndex(item => item.id === payload.id);

      if (index > -1) {
        // 存在

        // 判断存在的这个商品在购物车中的数量
        let obj = state.cats[index];

        if (obj.num > 1) {
          // --
          obj.num--;
          obj.totalPrice -= obj.price;
        } else {
          // 直接删除这个下标的商品
          state.cats.splice(index, 1);
        }

        window.localStorage.setItem("cats", JSON.stringify(state.cats));
      } else {
        // 不存在，无需操作
      }
    }
  },

  actions: {}
};

// vuex 仓库的配置文件，要暴露出去 仓库的实例

// 1. 引入 vue
import Vue from "vue";

// 2. 引入 vuex
import Vuex from "vuex";

// 3. 调用 vuex
Vue.use(Vuex);

// 4. 定义仓库的 state 、 getters、 mutations 、 actions 、modules
const state = {
  name: "张三"
};

const getters = {
  /**
   * 基于 state 中的 name 得出 firstName
   */
  firstName(state) {
    return state.name.split("")[0];
  }
};

const mutations = {
  // 除了接收到 state ，之外，还能接收到一个 payload(参数)
  setName(state, payload) {
    state.name = payload.newName;
  }
};

const actions = {
  // context 是上下文对象，也可以直接简单理解为 就是 仓库的实例对象
  setNameSync: function(context, payload) {
    // payload { newName: '李四' }
    // 写异步
    setTimeout(() => {
      context.commit({
        type: "setName",
        // newName: payload.newName
        // newName: '李四'
        ...payload
      });
    }, 1000);
  }
};

// 5. 实例化 仓库实例对象
const store = new Vuex.Store({
  // 选项配置有哪些：state 、 getters、 mutations 、 actions 、modules
  state,
  getters,
  mutations,
  actions
});

// 6. 暴露仓库实例对象
export default store;

// 1. 引入 Vue
import Vue from "vue";

// 2. 引入 Vuex
import Vuex from "vuex";

// 3. 引入拆分出去的仓库小模块
import product from "./modules/product";
import cat from "./modules/cat";

// 4. 调用
Vue.use(Vuex);

// 5. 实例化 仓库的实例对象
export default new Vuex.Store({
  modules: {
    product,
    cat
  }
});

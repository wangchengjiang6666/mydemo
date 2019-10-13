import Vue from "vue";
import App from "./App.vue";

// 整个引入1 引入模块
// import ElementUI from "element-ui";
// // 整个引入2 引入样式
// import "element-ui/lib/theme-chalk/index.css";

// // 整个引入3 调用
// Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/base.scss'

window.isLogin = false // 登录状态

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

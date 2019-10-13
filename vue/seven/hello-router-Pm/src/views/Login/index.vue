<template>
  <div class="page-login">
    <input type="text" placeholder="用户名" />
    <input type="password" placeholder="密码" />

    <button @click="handleLogin">点我就登录成功</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    handleLogin() {
      window.isLogin = true
      // 登录成功之后，需要跳转到哪里去？
      // 之前如果是从某个想要去的页面然后拦截到登录页面的话，登录成功就让你回到之前要去的页面。

      // // 1. 取出 topath，立马删除
      // let toPath = window.localStorage.getItem('toPath') || '/'
      // window.localStorage.removeItem('toPath')
      // // 2. js控制页面跳转，编程式导航
      // this.$router.replace(toPath)

      // 1. 取出url地址上的参数
      let toPath = this.$route.query.redirect || '/'
      this.$router.replace(toPath)
    }
  }
}
</script>

<template>
  <div class="page-home-list">
    <h1>列表</h1>
    <ul>
      <li>
        <router-link to="/detail/1">苹果</router-link>
      </li>
      <li>
        <router-link to="/detail/2">香蕉</router-link>
      </li>
      <li>
        <router-link to="/detail/3">橘子</router-link>
      </li>

      <p @click="fn1">苹果</p>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    fn1 () {
      this.$router.push({
        // path: '/detail',
        name: 'abc',
        params: {
          id: 1
        }
      })

      // 我就想使用  params 来传递动态路由的参数，
      // 1. 需要去掉 path ，因为 path 与 params 不能共存
      // 2. 需要在定义路由规则的时候，给当前这个详情页的路由规则，取个名字
      // 3. 这时，只需要，传递 name 与 params
    }
  }
}
</script>

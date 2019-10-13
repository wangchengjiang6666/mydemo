<template>
  <div class="page-detail">
    <h1>详情</h1>
    <p>水果的名字：{{ info.name }}</p>
    <p>水果的价格：{{ info.price }}</p>猜你喜欢：
    <div @click="fn1">香蕉</div>

    <p @click="fn2('about')">关于页</p>
    <p @click="fn2('list')">列表页</p>
  </div>
</template>

<script>
// 引入 jquery
import $ from 'jquery'

export default {
  name: 'Detail',

  data () {
    return {
      info: {}
    }
  },

  watch: {
    // $route(newVal, oldVal) {
    //   console.log('路由变化')
    //   this.getInfo()
    // }
  },

  methods: {
    fn1 () {
      this.$router.push('/detail/2')
    },

    fn2 (str) {
      // this.$router.push(`/${str}`)
      // this.$router.replace(`/${str}`)
      // 还可以传递对象。路由信息对象
      // {
      //   path: '',
      //   query:
      //   params:
      // }
      this.$router.push({
        path: '/about',
        query: {
          name: '张三',
          age: 18
        },
        params: {
          id: '123'
        }
      })

      // ？ 如果想要传递 params , 那么不要使用 path

      // this.$router.back()
    },

    /**
     * 获取详情数据
     */
    getInfo () {
      // Fetch Axios
      // jquery
      // 1. 取出当前的水果id。从动态路由参数上获取
      let id = this.$route.params.id

      // 2. 拼接url
      let url = `http://localhost:3000/list/${id}`

      // 3. 发送请求
      $.get(url, res => {
        this.info = res
      })
    }
  },

  created () {
    this.getInfo()
  },

  beforeDestroy () {
    console.log('详情页面销毁')
  },

  beforeRouteUpdate (to, from, next) {
    // to 要去那个路由
    // from 从哪里来
    // next 是否放行，是个方法。调用的话，就可以让他去。
    // console.log(to)
    // console.log(from)
    // console.log('路由有更新的时候触发')

    next()
    this.getInfo()
  }
}
</script>

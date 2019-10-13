<template>
  <div id="app">
    <h1>仓库中 name 是：{{ name }}</h1>

    <hr />

    <Hello></Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
// 1. 引入 mapState 这个辅助函数, 类似于解构赋值的import方式
import { mapState } from "vuex";

export default {
  name: "app",

  components: {
    Hello
  },

  // 2. 定义一个计算属性
  computed: mapState(["name"])
};
</script>

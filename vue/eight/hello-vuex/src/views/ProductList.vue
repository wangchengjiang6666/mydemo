<template>
  <div>
    <h1>商品列表页</h1>

    <!-- <button @click="fn1">点击调用仓库中的 add 那个 mutation</button> -->

    <table>
      <thead>
        <tr>
          <th>商品id</th>
          <th>商品名字</th>
          <th>商品单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="jian(item)">-</button>
            <button @click="add(item)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />

    <!-- 直接把购物车页面显示在这，先做更简单的显示 -->
    <CatList></CatList>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CatList from "./CatList";
export default {
  name: "ProductList",

  components: {
    CatList
  },

  computed: {
    ...mapState("product", ["list"]) //没有给仓库的小模块定义 命名空间时，不能用
    // list() {
    //   return this.$store.state.product.list;
    // }
  },

  methods: {
    ...mapMutations("cat", ["add", "jian"])
    // ...mapMutations("product", ["add"]),
    // fn1() {
    //   // console.log(this.$store);
    //   // this.$store.commit("product/add");
    //   this.add();
    // }
  }
};
</script>

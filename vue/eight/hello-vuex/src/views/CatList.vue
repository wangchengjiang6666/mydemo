<template>
  <div>
    <h1>购物车列表页</h1>

    <!-- <input type="text" :value="msg" @input="fn1" /> -->

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="isAllCheck" />
          </th>
          <th>商品ID</th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>商品数量</th>
          <th>商品总价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cats" :key="item.id">
          <td>
            <input type="checkbox" :value="item.id" v-model="checkedIds" />
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.totalPrice }}</td>
        </tr>
      </tbody>
    </table>

    <p>勾选上的商品的总价： {{ total }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Cat",

  // data() {
  //   return {
  //     msg: ""
  //   };
  // },

  computed: {
    ...mapState("cat", ["cats", "msg"]),
    ...mapGetters("cat", ["total"]),
    // msg: {
    //   get() {
    //     return this.$store.state.cat.msg;
    //   },
    //   set(value) {
    //     this.$store.commit("cat/setMsg", value);
    //   }
    // },
    isAllCheck: {
      get() {
        return this.$store.getters["cat/isAllCheck"];
      },

      set(value) {
        // console.log(value);
        this.$store.commit("cat/toggleCheck", value);
      }
    },
    checkedIds: {
      get() {
        return this.$store.state.cat.checkedIds;
      },
      set(value) {
        this.$store.commit("cat/setCheckedIds", value);
      }
    }
  },

  methods: {
    // ...mapMutations("cat", ["setMsg"]),
    // // ...{
    // //   setMsg() {
    // //     this.$store.commit('cat/setMsg')
    // //   }
    // // },
    // fn1(event) {
    //   // 1. 取出 value
    //   let value = event.target.value;
    //   // 2. 修改 仓库中的那个 msg
    //   // this.$store.commit('cat/setMsg', value)
    //   this.setMsg(value);
    // }
  }
};
</script>

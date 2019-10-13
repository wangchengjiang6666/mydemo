<template>
  <div>
    <h2>我也从仓库中拿出 name 看看：{{ name }}, 然后首字母是 {{ firstName }}</h2>

    <button @click="setNameSync({ newName: '李四' })">修改 仓库中的 name 为李四</button>

    <button @click="setNameSync({ newName: '王五' })">修改 仓库中的 name 为王五</button>

    <h2>下面是我喜欢的水果。一共有 {{ myLoveListNum }} 个</h2>
    <ul>
      <li v-for="(item, index) in myLoveList" :key="index">{{ item }}</li>
    </ul>

    <button @click="addShuiguo('芒果')">新增一个 芒果 来我的喜欢中</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Hello",

  data() {
    return {
      myLoveList: ["苹果", "西瓜", "橘子"]
    };
  },

  // 如果组件还需要实现自己的 计算属性，那么需要采用 ... 展开运算符 方式
  // computed: mapState(["name", "hello"])
  // 上面的代码，其实展开了是如下这样
  // computed: {
  //   name: function() {
  //     return this.$store.state.name;
  //   },
  //   hello: function () {
  //     return this.$store.state.hello
  //   }
  // }

  computed: {
    ...mapState(["name"]),
    ...mapGetters(["firstName"]),

    myLoveListNum: function() {
      return this.myLoveList.length;
    }
  },

  // methods: mapMutations(["setName"])
  // 展开这个辅助函数，真实的写法入下
  // methods: {
  //   setName(name) {
  //     // commit 方法是用来提交 mutation 的
  //     // this.$store.commit("setName", payload);
  //     this.$store.commit({
  //       type: "setName",
  //       newName: name
  //     });
  //   }
  // }

  methods: {
    // ...mapMutations(["setName"]),

    // ...mapActions(["setNameSync"]),
    // mapActions 的展开是如何
    ...{
      setNameSync(obj) {
        this.$store.dispatch("setNameSync", obj);
      }
    },

    addShuiguo(xx) {
      this.myLoveList.push(xx);
    },

    fn1(obj) {
      // obj { newName: '李四' }
      // 这里吧异步走完之后，再去调用 仓库中的 mutation
      setTimeout(() => {
        // this.setName(obj);
        // 对象的提交
        this.$store.commit({
          type: "setName",
          // newName: obj.newName
          // newName: '李四'
          ...obj
          // newName: 'xxx'
        });
        // 普通的提交
        // this.$store.commit("setName", obj);
      }, 1000);
    }
  },

  created() {
    console.log(this.$store);
  }
};
</script>

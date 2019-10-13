<template>
  <div>
    <h1>自己实现的多选</h1>
    <!-- 
      全选与取消选择的思路整理：

      1. 用数据的方式保存上勾选的每一行数据的某个唯一的值  [1, 2, 3]

      2. 基于 数据的条数 与 当前勾上的数据的条数，计算出是否全选上

    -->

    <table>
      <thead>
        <tr>
          <th>
            <label class="u-check">
              <input type="checkbox" v-model="isAll" />
              <span></span>
            </label>
          </th>
          <th>id</th>
          <th>名字</th>
          <th>单价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td>
            <label class="u-check">
              <input type="checkbox" :value="item.id" v-model="myLoveList" />
              <span></span>
            </label>
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      myLoveList: [1, 3], // 存放我喜欢的水果
      tableData: [
        {
          id: 1,
          name: "apple",
          price: 10
        },
        {
          id: 2,
          name: "banana",
          price: 20
        },
        {
          id: 3,
          name: "orange",
          price: 30
        }
      ]
    };
  },

  computed: {
    // isAll() {
    //   return this.tableData.length === this.myLoveList.length;
    // }

    isAll: {
      get() {
        return this.tableData.length === this.myLoveList.length;
      },
      set(val) {
        if (val) {
          // 全部勾上
          this.myLoveList = this.tableData.map(item => item.id);
        } else {
          // 全部取消
          this.myLoveList = [];
        }
      }
    }
  }
};
</script>

<style>
.u-check {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
}

.u-check input {
  width: 100%;
  height: 100%;
  opacity: 0;
}

.u-check span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url("./assets/check-1.png");
}

.u-check input:checked + span {
  background-image: url("./assets/check-2.png");
}
</style>

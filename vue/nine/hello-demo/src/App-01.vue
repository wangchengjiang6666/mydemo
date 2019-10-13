<template>
  <div>
    <h1>表格的全选与反选</h1>

    <el-table
      ref="myTable"
      @row-click="fn1"
      @selection-change="fn2"
      :data="tableData"
      stripe
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="date" label="日期" width="180"></el-table-column>

      <el-table-column prop="name" label="姓名" width="180"></el-table-column>

      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <el-button @click="fn3" type="primary">点击我，选择上第二条数据</el-button>
  </div>
</template>

<script>
import { Button, Table, TableColumn } from "element-ui";

export default {
  name: "App",

  components: {
    [Button.name]: Button,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },

  data() {
    return {
      checkedIds: [],
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },

  methods: {
    fn1(row, col, event) {
      // console.log(row);
      // console.log(col);
      // console.log(event);
      // console.log(1111);
    },

    fn2(val) {
      this.checkedIds = val.map(item => item.id);
    },

    fn3() {
      console.log(123);

      // this.$refs.myTable.clearSelection();
      this.$refs.myTable.toggleRowSelection(this.tableData[1], true);
    }
  }
};
</script>

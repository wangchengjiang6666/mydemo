// 生成 student 表的 模型对象

// 1. 引入链接了数据库的 mongoose 对象
const db = require("../config/db");

// 2. 定义这张表的 schema 对象
const schema = new db.Schema({
  // key: value 的设置
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    default: 18
  },

  sex: {
    type: Number,
    default: 1
  }
});

// 3. 基于第2步中的 schema 生成 model 对象
// const model = db.model("student", schema);

// // 4. 暴露model
// module.exports = model;

module.exports = db.model("student", schema);
// 数据库中的表名是根据 db.model 第一个参数的复数形式来确定的。

// 对 user 表的模型文件

const db = require("../config/db");

const schema = new db.Schema({
  // 字段名与格式限制
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    default: "http://localhost:3000/hero.jpg"
  }
});

module.exports = db.model("user", schema);

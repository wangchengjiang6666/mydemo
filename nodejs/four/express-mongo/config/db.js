// 暴露出去链接了mongodb的 mongoose对象

// 1. 引入 mongoose
const mongoose = require("mongoose");

// 2. 定义数据库的链接地址  1907 - 数据库的名字
const url = "mongodb://127.0.0.1:27017/1907";

// 3. mongoose.connect 方法来链接
// mongoose.connect(url, { useNewUrlParser: true }, function(err) {
//   if (err) {
//     console.log("数据库链接失败");
//   } else {
//     console.log("数据库链接成功");
//   }
// });

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("数据库链接成功");
  })
  .catch(err => {
    console.log("数据库链接失败", err.message);
  });

// 4. 暴露已经链接了数据库的 mongoose 对象
module.exports = mongoose;

const express = require("express");
const server = express();

// 设置 cors 允许跨域
// 在响应头中加入一个属性 Access-Control-Allow-Origin
// 将这个属性的值设置为 *

server.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  // ...
  next();
});

// GET http://localhost:3000/getStudent
server.get("/getStudent", (req, res) => {
  res.send({
    code: 0,
    msg: "获取学生列表成功",
    data: [{ id: 1, name: "张三", age: 18 }, { id: 2, name: "李四", age: 20 }]
  });
});

server.listen(3000);

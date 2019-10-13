// 这个文件就是对 bcryptjs 模块的调研与测试

// 1. 引入  bcryptjs
const bcryptjs = require("bcryptjs");

// 2. 调用 加密方法
let password = "123";
// bcryptjs.hash(需要加密的密码， 加密的程度 1-10, 回调函数)

// hash 异步方法
// bcryptjs.hash(password, 10, (err, hash) => {
//   // err 加密失败的错误信息

//   // hash 是加密成功之后的密码
//   if (err) {
//     console.log("加密失败");
//   } else {
//     console.log(hash);
//   }
// });

// $2a$10$IPRnhk8Kw4LePrWYl.7hcuKmbALEFkYyQP8ihKlTQNXf6OdWVxvVi
// $2a$10$hCsU85ctUL2p3q5Angl5jOZp/WCjEE.73cKwXa1VQcjwOd4PdKSBq

// hash 同步方法
// let newPassword = bcryptjs.hashSync(password, 10);
// console.log(newPassword);

// 密码校验
// bcryptjs.compare(用户输入的密码, 数据库已经加密的密码)

// bcryptjs
//   .compare(password, "$2a$10$IPRnhk8Kw4LePrWYl.123123123123")
//   .then(data => {
//     console.log(data);
//   });

let isOk = bcryptjs.compareSync(
  password,
  "$2a$10$123123123/WCjEE.73cKwXa1VQcjwOd4PdKSBq"
);
console.log(isOk);

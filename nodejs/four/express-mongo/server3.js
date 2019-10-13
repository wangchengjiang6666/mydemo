// // // console.log(1);

// // // setTimeout(() => {
// // //   console.log(2);
// // // }, 1000);

// // // console.log(3);

// const sleep = () => {
//   // 返回 promise 对象
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(2);
//       // resolve(123); // promise 完成
//       reject(new Error("出错了"));
//     }, 1000);
//   });
// };

// const main = async () => {
//   console.log(1);
//   try {
//     let a = await sleep();
//     console.log(a);
//     console.log(3);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// main();

const express = require("express");
const bcryptjs = require("bcryptjs");
const server = express();

const StudentModel = require("./models/student");
const UserModel = require("./models/user");

// req.body 的中间件
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// 静态资源托管的中间件
server.use(express.static("./public"));

server.get("/api/getStudentList", async (req, res) => {
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 5;

  // 1. 获取总条数
  // StudentModel.find()
  //   .count()
  //   .then(num => {
  //     let totalPage = Math.ceil(num / pageSize);

  //     StudentModel.find()
  //       .skip((pageNum - 1) * pageSize)
  //       .limit(pageSize)
  //       .then(data => {
  //         res.send({
  //           code: 0,
  //           msg: "ok",
  //           data: {
  //             list: data,
  //             totalPage: totalPage
  //           }
  //         });
  //       });
  //   });

  let num = await StudentModel.find().count();

  let totalPage = Math.ceil(num / pageSize);
  let data = await StudentModel.find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);

  res.send({
    code: 0,
    msg: "ok",
    data: {
      list: data,
      totalPage: totalPage
    }
  });
});

server.post("/api/sign-up", async (req, res) => {
  //  参数
  let username = req.body.name;
  let password = req.body.pwd;

  let data = await UserModel.findOne({ username: username });
  if (data) {
    // 存在，已经注册
    res.send({
      code: -1,
      msg: "已经注册过了"
    });
  } else {
    // 不存在，可以注册
    let user = new UserModel({
      username: username,
      password: password
    });

    let isOk = await user.save();
    console.log(isOk);
    res.send({
      code: 0,
      msg: "ok"
    });
  }
});

server.listen(3000);

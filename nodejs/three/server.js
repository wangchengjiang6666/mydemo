const express = require("express");
const server = express();

const StudentModel = require("./models/student");

// req.body 的中间件
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// 静态资源托管的中间件
server.use(express.static("./public"));

// POST http://localhost:3000/api/addStudent
server.post("/api/addStudent", (req, res) => {
  // 1. 获取前端传递过来的参数
  let studentName = req.body.name;
  let studentAge = req.body.age;
  let studentSex = req.body.sex;

  // 2. 写入到数据库中的某个students表中，操作 student 的模型对象
  // 增加操作
  let student = new StudentModel({
    // key: value
    // key -> 表中字段名字
    // value -> 这个字段的值
    name: studentName,
    age: studentAge,
    sex: studentSex
  });

  student
    .save()
    .then(() => {
      // 新增成功
      res.send({
        code: 0,
        msg: "新增学生成功"
      });
    })
    .catch(err => {
      // 新增失败
      res.send({
        code: -1,
        msg: err.message
      });
    });
});

// GET http://localhost:3000/api/getStudentList
server.get("/api/getStudentList", (req, res) => {
  // 从数据库中获取数据并返回给前端
  StudentModel.find()
    .then(data => {
      // data 是查询出来的数据， 是一个数组格式
      console.log(data);
      res.send({
        code: 0,
        msg: "ok",
        data: data
      });
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
});

// POST http://localhost:3000/api/updateStudent
server.post("/api/updateStudent", (req, res) => {
  // 1. 获取前端传递过来的参数
  let studentId = req.body.id;
  let studentAge = req.body.age;

  // 修改
  StudentModel.updateOne({ _id: studentId }, { age: studentAge })
    .then(data => {
      console.log(data);
      res.send({
        code: 0,
        msg: "ok"
      });
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
});

// POST http://localhost:3000/api/deleteStudent
server.post("/api/deleteStudent", (req, res) => {
  // 1. 获取要删除的学生id
  let studentId = req.body.abc;

  // 2. 删除
  StudentModel.deleteOne({ _id: studentId })
    .then(data => {
      console.log(data);
      res.send({
        code: 0,
        msg: "删除成功"
      });
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
});

// GET http://localhost:3000/api/getStudentListByFenye 有分页的一个接口
server.get("/api/getStudentListByFenye", (req, res) => {
  // 1. 从前端获取两个参数 pageNum pageSize
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 5;

  // 从数据库中获取数据并返回给前端

  // 1. 获取数据的总条数
  StudentModel.find()
    .count()
    .then(num => {
      // num 就是总条数
      // 计算出总的页数
      let totalPage = Math.ceil(num / pageSize);

      StudentModel.find()
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .then(data => {
          // data 是查询出来的数据， 是一个数组格式
          console.log(data);
          res.send({
            code: 0,
            msg: "ok",
            data: {
              list: data,
              totalPage: totalPage
            }
          });
        })
        .catch(error => {
          res.send({
            code: -1,
            msg: error.message
          });
        });
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
});

server.listen(3000);

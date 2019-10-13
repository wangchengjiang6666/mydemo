const express = require("express");
const bcryptjs = require("bcryptjs");
const fs = require("fs");
const path = require("path");

// 文件上传操作 1. 引入 multer
const multer = require("multer");//图片处理中间件

// 文件上传操作 2. 调用 multer 创建出一个文件上传的中间件
const upload = multer({
  dest: "C:/tmp" // dest 是设置文件上传时的一个临时路径
});

const server = express();

const StudentModel = require("./models/student");
const UserModel = require("./models/user");

// req.body 的中间件
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// 静态资源托管的中间件
server.use(express.static("./public"));

// 实现修改用户头像
// 文件上传操作 3 这个接口需要使用文件上传，就调用 2 中 upload的方法
// upload.single(name) name 前端上传的参数的名字
// upload.array(name, maxCount)
// upload.fileds({ name: '正面', maxCount }, { name: '反面', maxCount })
server.post("/api/updateStudentImg", upload.single("avatar"), (req, res) => {
  // 1. 获取前端传递过来的文件信息
  console.log(req.file);

  // 2. 需要将上传过来的文件写入到 public 目录下面，
  // 2.1 获取文件内容
  const data = fs.readFileSync(req.file.path);
  // 2.2 写入文件内容
  let newFileName = new Date().getTime() + "_" + req.file.originalname;
  const newPath = path.resolve(__dirname, "./public", newFileName);
  fs.writeFileSync(newPath, data);

  res.send({
    code: 0,
    msg: "修改成功",
    data: `http://localhost:3000/${newFileName}`
  });
});

server.post("/api/multerImg", upload.array("avatar"), (req, res) => {
  console.log(req.file); // undefined
  console.log(req.files); // [{}, {}, {}]
});

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

// GET http://localhost:3000/api/getStudentListBySearch 有搜索与分页的一个接口
server.get("/api/getStudentListBySearch", (req, res) => {
  // 1. 从前端获取两个参数 pageNum pageSize searchName
  let searchName = req.query.name;
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 5;

  searchName = new RegExp(searchName); // 将字符串修改为正则

  // 从数据库中获取数据并返回给前端

  // 1. 获取数据的总条数
  StudentModel.find({ name: searchName })
    .count()
    .then(num => {
      // num 就是总条数
      // 计算出总的页数
      let totalPage = Math.ceil(num / pageSize);

      StudentModel.find({ name: searchName })
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

// 注册 POST http://localhost:3000/api/sign-up
server.post("/api/sign-up", (req, res) => {
  // 1. 从前端获取参数
  let username = req.body.name;
  let password = req.body.pwd;

  // 2. 对当前要注册的用户做是否存在的判断
  UserModel.find({ username })
    .then(data => {
      // 根据 data 的长度做判断
      if (data.length > 0) {
        // 用户已存在
        res.send({
          code: -1,
          msg: "用户名已被注册"
        });
      } else {
        // 不存在
        // 1. 将密码先做加密
        let newPassword = bcryptjs.hashSync(password, 10);

        let user = new UserModel({
          username: username,
          password: newPassword
        });

        user.save().then(() => {
          res.send({
            code: 0,
            msg: "注册成功"
          });
        });
      }
    })
    .catch(error => {
      res.send({
        code: -1,
        msg: error.message
      });
    });
});

// 登录 POST http://localhost:3000/api/sign-in
server.post("/api/sign-in", (req, res) => {
  // 1. 接收前端传递过来的用户名与密码
  let username = req.body.name;
  let password = req.body.pwd;

  // 2. 将数据库中用户名为  username 找出来
  UserModel.findOne({ username: username }).then(data => {
    // data 将是一个对象
    console.log(data);
    if (data) {
      // 找到了
      // 拿出数据库中当前用户的 密码
      let aPwd = data.password;
      // 用户输入的密码与 aPwd 做校验
      if (bcryptjs.compareSync(password, aPwd)) {
        // 密码正确
        res.send({
          code: 0,
          msg: "登录成功"
        });
      } else {
        // 密码错误
        res.send({
          code: -1,
          msg: "用户名或密码不正确"
        });
      }
    } else {
      // 没有这个用户
      res.send({
        code: -1,
        msg: "用户名或密码不正确"
      });
    }
  });
});

server.listen(3000);

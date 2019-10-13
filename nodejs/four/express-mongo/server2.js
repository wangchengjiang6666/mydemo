const express = require("express");
const server = express();

// 学生
const StudentModel = require("./models/student");

// 中间件的调用
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static("./public"));

server.get("/api/student", (req, res) => {
  StudentModel.find(data => {
    res.send(data);
  }).catch(error => {
    res.status(500).send(error.message);
  });
});

server.post("/api/student", (req, res) => {
  let student = new StudentModel({
    name: xxx,
    age: xxx
  });

  student
    .save()
    .then(data => {
      res.status(201).send(data);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

server.put("/api/student/:id", (req, res) => {
  StudentModel.updateOne(
    {
      _id: req.params.id
    },
    {
      name: xxx
    }
  )
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

server.delete("/api/student/:id", (req, res) => {
  StudentModel.deleteOne({
    _id: req.params.id
  })
    .then()
    .catch();
});

server.listen(3000);

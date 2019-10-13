# json-server

nodejs 的第三方工具包。需要全局安装一下。
能够帮助我们快速的实现一个假数据，（还有点真实）。还可以有很多的操作方式，比如搜索、分页、排序

1. 全局安装
   npm install -g json-server

2. 在某个位置写一个 db.json

```json
{
  "students": [],
  "users": []
}
```

3. 在当前这个 db.json 文件夹目录下，使用 `json-server db.json` 命令启动。

cmd json-server
这时，它会帮我们在本地的 3000 端口号启动一个服务，服务地址
localhost:3000/students
localhost:3000/users

GET http://localhost:3000/students 就能将 db.json 中所写的 数组全部获取出来

POST http://localhost:3000/students 就能新增一个 student

DELTE http://localhost:3000/students/:id 就能删除这个 id 的学生

GET http://localhost:3000/students?name=xxx 搜索

GET http://localhost:3000/students?name_like=xxx 模糊搜索

GET http://localhost:3000/students?_page=1&_limit 分页 \_page 当前页码 \_limit 每页显示条数

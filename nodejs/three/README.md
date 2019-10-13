# mongodb

## mongodb 简介

## mongodb 语句来操作数据库

- show dbs;
- db;
- use xxx;

#### 增

- db.xxxx.insertOne({})
- db.hello.insertMany([{ name: 'lisi', age: 19}, {name: 'wangwu', age: 20}, {name: 'maliu', age: 21}])

#### 删

- db.hello.removeOne(删除的条件)
- db.hello.removeMany(删除的条件)

#### 改

- db.hello.updateOne(查询条件, 修改内容)  
  db.hello.updateOne({ name: 'zhangsan' }, {\$set: { age: 50 }})
- db.hello.updateMany(查询条件, 修改内容)
  db.hello.updateMany({ name: 'zhangsan' }, {\$set: { age: 150 }})

#### 查

- db.xxxx.find()
- db.xxxx.find(查询的条件)
  db.hello.find({ name: 'zhangsan' })
  db.hello.find({ name: 'lisi', age: 19 })

#### 使用 skip() 与 limit() 实现分页

思考实现分页需要哪些数据：

1. pageNum 当前第几页 1
2. pageSize 每页显示多少条 10
3. totalSize 一共有多少条数据
4. totalPage 一共有几页

第一页： db.xxx.find().skip(0).limit(10)
第二页： db.xxx.find().skip(10).limit(10)
第三页： db.xxx.find().skip(20).limit(10)
第四页： db.xxx.find().skip(30).limit(10)

## mongodb 与 nodejs 结合

## 登录接口的实现

## 注册接口的实现

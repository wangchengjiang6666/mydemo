# mongoose

> 它是一款能够在 nodejs 中操作 mongodb 数据库的模块。

## 两个核心概念点

1. schema
   表示数据库表结构的一种格式  
   {
   key: value
   key -> 表中字段的名字
   value -> string | object

   name: string,
   age: number,
   password: {
   type: string,
   required: true,
   default: '123'
   }
   }

2. model
   基于某个 schema 生成的某个表的模型对象，生成的模型对象上就有一系列的对数据库这张表操作的方法

## 使用步骤

1. 安装 mongoose
   npm install --save mongoose
2. 建立 mongodb 链接对象
3. 创建 某张表的 schema 与相对应的 model
4. 基于第 3 步中的 model 来对这张表进行操作。

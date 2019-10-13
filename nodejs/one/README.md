# 这是一级标题

## 二级标题

### 三级

#### 四级

##### 五级

###### 六级

## 待办事项

- 吃饭
- 睡觉
- 打豆豆

1. hello
2. world
3. vue

## 表格

| id  | 姓名 | 年龄 |
| --- | ---- | ---- |
| 1   | 张三 | 18   |
| 2   | 李四 | 19   |

## 如何让 nodejs 启动的服务自己在文件修改了之后，可以自动重新启动。

nodemon

全局安装一个款 nodemon 的工具类

1. npm install -g nodemon
2. nodemon -v
3. 将 node 命令换成 nodemon 命令来使用即可。

   问题：
   安装之后输入 nodemon -v 不能得到版本号，重新启动命令提示符（终端）之后，还是报错。这时需要按如下方法去解决：

   1. 通过 npm 全局安装的 模块，安装到哪里去了？ C:\Users\Administrator.DESKTOP-VOMEVJ2\AppData\Roaming\npm
   2. 将这个路径添加到系统的环境变量中。（!!!!!!!!!!!!!!!!!千万不要乱搞）

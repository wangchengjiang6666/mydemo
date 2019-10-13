# redux 使用

1. 安装
   npm install --save redux || yarn add redux
2. 创建一个 src/store/index.js 文件 （主仓库）
3. 创建一个 src/store/reducers.js 文件 （reducer 纯函数）
4. 那个组件页面需要使用仓库的数据，就在那个组件页面中引入 主仓库的那个文件。然后在组件的构造函数中调用 仓库的 getState() 方法获取仓库的数据。

#### redux 的初始化

默认，redux 会自动派发一个 init 的动作，我们可以借助于这个特性，来初始化仓库的 state 数据

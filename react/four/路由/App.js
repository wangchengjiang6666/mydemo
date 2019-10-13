import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AuthRoute from "./utils/AuthRoute";

import Index from "./views/Index";
import Detail from "./views/Detail";
import Login from "./views/Login";

window.store = {
  isLogin: false // 通过这个对象来判断是否有登录
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthRoute path="/detail/:id" component={Detail}></AuthRoute>
          <Route path="/login" component={Login} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;

// 登录拦截
// 1. 那个路由页面需要被拦截。就去那个路由页面那个坑里面做处理。
// 2. 将  componet 修改为 render
// 3. 在 render 里面做判断处理

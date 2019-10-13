import React from "react";

class Login extends React.Component {
  login = () => {
    // 登录
    window.store.isLogin = true;
    // 登录成功跳转到某个页面。
    // 得到redirect的参数？
    let search = this.props.location.search;
    let str = search.substr(1);
    let arr = str.split("&");
    let query = {};
    arr.forEach(item => {
      let key = item.split("=")[0];
      let value = item.split("=")[1];
      query[key] = value;
    });

    let redirect = query.redirect || "/home";
    this.props.history.replace(redirect);
  };

  render() {
    return (
      <div>
        <p>登录页面</p>
        <button onClick={this.login}>点我就登录</button>
      </div>
    );
  }
}

export default Login;

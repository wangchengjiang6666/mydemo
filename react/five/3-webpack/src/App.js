// 受控组件与非受控组件，一般都是指表单相关的操作
// 受控组件的概念：表单组件他的value值是完全有数据来控制的。
// 非受控组件的概念：不是由数据来控制的。一般就类似操作原生js那样去操作

import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      sex: 1, // 0 - 女 1 - 男
      time: "2018", // 出生日期
      loves: [1], //我喜欢的水果
      isOk: false
    };
  }

  // handleChangeUserName(e) {
  //   let value = e.target.value;

  //   this.setState({
  //     username: value
  //   });
  // }

  // handleChangePassword(e) {
  //   let value = e.target.value;

  //   this.setState({
  //     password: value
  //   });
  // }

  // handleChangeSex = e => {
  //   let value = e.target.value;

  //   this.setState({
  //     sex: parseInt(value)
  //   });
  // };

  // handleChangeTime = e => {
  //   let value = e.target.value;

  //   this.setState({
  //     time: value
  //   });
  // };

  // handleChangeLoves = e => {
  //   let value = parseInt(e.target.value);
  //   let loves = [...this.state.loves];

  //   // 判断选择的水果id是否在当前的 loves 中存在
  //   let index = this.state.loves.indexOf(value);

  //   if (index > -1) {
  //     // 存在，取消勾选
  //     loves.splice(index, 1);
  //   } else {
  //     loves.push(value);
  //   }

  //   this.setState({
  //     loves
  //   });
  // };

  // handleChangeIsOk = e => {
  //   this.setState({
  //     isOk: !this.state.isOk
  //   });
  // };

  // 将上面的 handle 处理成一个
  handleChange = e => {
    // 1. 拿到 value 值
    let value = e.target.value;
    // 2. 拿到 name 值
    // console.log(e.target.name);
    let name = e.target.name;

    if (name === "sex") {
      this.setState({
        [name]: parseInt(value)
      });
    } else if (name === "loves") {
      let loves = [...this.state.loves];

      // 判断选择的水果id是否在当前的 loves 中存在
      let index = this.state.loves.indexOf(parseInt(value));

      if (index > -1) {
        // 存在，取消勾选
        loves.splice(index, 1);
      } else {
        loves.push(parseInt(value));
      }

      console.log(loves);

      this.setState({
        loves
      });
    } else if (name === "isOk") {
      this.setState({
        isOk: !this.state.isOk
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    const isOKOK =
      !this.state.isOk || !this.state.username || !this.state.password;

    return (
      <div>
        <h1>受控组件-input</h1>
        <div>
          <span>用户名：</span>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <div>
          <span>密码：</span>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <div>
          <span>性别：</span>
          <input
            type="radio"
            name="sex"
            value="1"
            checked={this.state.sex === 1}
            onChange={this.handleChange}
          />
          男
          <input
            type="radio"
            name="sex"
            value="0"
            checked={this.state.sex === 0}
            onChange={this.handleChange}
          />
          女
        </div>
        <div>
          <span>出生日期：</span>
          <select
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
          >
            <option value="">请选择</option>
            {["2018", "2019"].map(item => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <span>喜欢的水果</span>
          {[
            { id: 1, name: "apple" },
            { id: 2, name: "banana" },
            { id: 3, name: "orange" }
          ].map(item => {
            return (
              <label key={item.id}>
                <input
                  name="loves"
                  type="checkbox"
                  value={item.id}
                  checked={this.state.loves.includes(item.id)}
                  onChange={this.handleChange}
                />
                {item.name}
              </label>
            );
          })}
        </div>

        <label>
          <input
            name="isOk"
            type="checkbox"
            checked={this.state.isOk}
            onChange={this.handleChange}
          />
          请同意我们的观点
        </label>

        <button disabled={isOKOK} onClick={this.handleRegistry}>
          注册
        </button>
      </div>
    );
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     isOKOK: !state.isOk || !state.username || !state.password
  //   };
  // }

  handleRegistry = () => {
    alert("注册");
  };
}
export default App;

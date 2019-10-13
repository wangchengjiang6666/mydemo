import React from "react";
import ReactDOM from "react-dom";

class Button extends React.PureComponent {
  render() {
    return <button>asfasd</button>;
  }
}

class Hello extends React.PureComponent {
  render() {
    return (
      <div>
        <p>我是 Hello</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("hello 被挂载");
  }

  componentWillUnmount() {
    console.log("hello 将要被销毁");
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log("初始化");

    this.state = {
      name: "阿三",
      isShowHello: true
    };
  }

  render() {
    console.log("render");
    return (
      <div ref="box">
        {this.state.isShowHello ? <Hello></Hello> : null}

        <hr />

        <h1>我的名字是 {this.state.name}</h1>
        <p>我是姓是：{this.state.firstName}</p>
        <button
          onClick={() => {
            this.setState({
              name: "李四"
            });
          }}
        >
          点我 修改 name
        </button>
        <button
          onClick={() => {
            this.setState({
              isShowHello: !this.state.isShowHello
            });
          }}
        >
          切换 isShowHello
        </button>
      </div>
    );
  }

  static getDerivedStateFromProps(props, state) {
    console.log("派生");
    return {
      firstName: state.name.split("")[0]
    };
    // return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return false;
  }

  componentDidMount() {
    console.log("挂载完成");
    // console.log(this);
    // console.log(document.getElementById("box").innerHTML);
  }

  componentDidUpdate() {
    console.log("组件更新完成， 页面的真实DOM也更新完成");
    console.log(this.refs["box"].querySelector("h1").innerHTML);
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));

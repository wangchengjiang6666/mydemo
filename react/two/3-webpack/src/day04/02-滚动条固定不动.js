import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

class Hello extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "张三",
      list: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>我是 Hello, {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({
              name: "李四"
            });
          }imput	
        >
          点我修改 name
        </button>

        <button
          onClick={() => {
            let list = [...this.state.list];
            list.unshift(list.length + 1);
            this.setState({
              list
            });
          }}
        >
          新增
        </button>

        <ul
          className="box"
          ref={el => {
            this.myBox = el;
          }}
        >
          {this.state.list.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

  // componentDidMount() {
  //   this.oldHeight = this.myBox.scrollHeight;
  //   console.log(this.oldHeight);
  // }

  getSnapshotBeforeUpdate() {
    console.log(this.myBox.scrollHeight);
    return {
      scrollTop: this.myBox.scrollTop,
      scrollHeight: this.myBox.scrollHeight
    }; //  没有更新之前的距离顶部的距离
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let jianju =
      this.myBox.scrollHeight - snapshot.scrollHeight + snapshot.scrollTop;
    this.myBox.scrollTop = jianju;
    console.log(this.myBox.scrollHeight);
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));

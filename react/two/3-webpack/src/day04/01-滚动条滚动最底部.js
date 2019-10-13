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
          }}
        >
          点我修改 name
        </button>

        <button
          onClick={() => {
            let list = [...this.state.list];
            list.push(list.length + 1);
            this.setState({
              list
            });

            // ? 数据变了，我立刻马上来操作滚动条？不能，真实DOM对象还没有更新了。
            // console.log(this.myBox);
            // console.log(this.myBox.scrollHeight);
            // this.myBox.scrollTop =
            //   this.myBox.scrollHeight - this.myBox.clientHeight;
          }}
        >
          新增
        </button>

        <ul
          className="box"
          ref={el => {
            // el，就是当前dom的dom对象，或者是当前组件的实例对象
            // 直接将 el 赋值给了一个 当前组件实例的某个属性，
            // 后续要获取的话，就可以直接 使用 this.myBox
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("更新之前，在 componentDidUpdate 之前调用");
    return "hello";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 数据更新完成，并且真实DOM也已经更新完成
    console.log(snapshot);

    if (prevState.list.length !== this.state.list.length) {
      console.log(this.myBox.scrollHeight);
      this.myBox.scrollTop = this.myBox.scrollHeight - this.myBox.clientHeight;
    }
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));

// Q？列表数据新增时，让滚动条滚动到最底部？
// A 在 componentDidUpdate 的时候做更新

// Q? 目前情况下，我将滚动条更新的代码，直接写在了componentDidUpdate里面，有没有优化空间？
// A 可以实现只有在某个具体数据发生变化了的时候，再去操作这个滚动条的代码

// Q ? 实现一个让滚动条保持不动
// 在 getSnapshotBeforeUpdate 返回一个对象，包含没有更新之前的 scrollTop 与 scrollHeight
// 在 componentDidUpdate 设置 scrollTop = 更新之后的 scrollHeight - 之前的scrollHeight + 之前的 scrollTop

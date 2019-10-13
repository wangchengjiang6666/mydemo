// 有 State 版本的 todoList
// UI组件 antd(PC) antd-mobile(移动)

// 使用 antd 的步骤
// 1. 安装 antd  npm install --save antd
// 2. 哪里要用，就在哪里引入。
// 3. 开始使用

import React from "react";
import ReactDOM from "react-dom";
import { Input, Button, Row, Col, List } from "antd";

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: "",
      todos: ["吃饭", "睡觉", "打豆豆"]
    };
  }

  /**
   * 输入框在输入的时候触发
   */
  handleChangeInput(e) {
    let value = e.target.value;
    this.setState({
      inputVal: value
    });
  }

  handleAddTodo() {
    // 1. 获取 input 框中的输入值 this.state.inputVal
    let list = [...this.state.todos];
    list.push(this.state.inputVal);
    this.setState({
      todos: list
    });
  }

  handleDelTodo(index) {
    // 知道要删除的下标
    console.log(index);
    let list = [...this.state.todos]; // 拷贝
    list.splice(index, 1);
    this.setState({
      todos: list
    });
  }

  render() {
    return (
      <div style={{ width: "500px", margin: "50px auto" }}>
        <Row gutter={16}>
          <Col span={20}>
            <Input
              placeholder="Basic usage"
              value={this.state.inputVal}
              onChange={this.handleChangeInput.bind(this)}
            />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.handleAddTodo.bind(this)}>
              Add
            </Button>
          </Col>
        </Row>

        <List
          bordered
          dataSource={this.state.todos}
          renderItem={(item, index) => (
            <List.Item>
              {item}{" "}
              <Button onClick={this.handleDelTodo.bind(this, index)}>
                &times;
              </Button>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    list: ["apple", "banana", "orange"]
  };

  render() {
    let { list } = this.state;
    return (
      <div>
        <h1>List</h1>

        <ul>
          {list.map(item => {
            return (
              <li key={item}>
                <Link to={`/detail/${item}`}>{item}</Link>
              </li>
            );
          })}

          <li onClick={this.handleToDetail}>西瓜</li>
        </ul>
      </div>
    );
  }

  handleToDetail = () => {
    // 编程式导航
    // vue this.$router.push('/detail/西瓜')
    this.props.history.push("/detail/西瓜");
  };
}

export default List;

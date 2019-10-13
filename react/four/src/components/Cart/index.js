import React from "react";
import { Table } from "antd";
import store from "../../store";

const columns = [
  {
    title: "序号",
    dataIndex: "id"
  },
  {
    title: "商品名称",
    dataIndex: "name"
  },
  {
    title: "商品单价",
    dataIndex: "price"
  },
  {
    title: "商品数量",
    dataIndex: "num"
  }
];

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: store.getState().cart.cartList
    };

    this.unsubscribe = store.subscribe(() => {
      console.log("购物车，仓库数据变化的监听");
      this.setState({
        cartList: store.getState().cart.cartList
      });
    });
  }

  componentWillUnmount() {
    // 取消store的监听
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Table
          rowKey="id"
          dataSource={this.state.cartList}
          columns={columns}
        ></Table>
      </div>
    );
  }
}

export default Cart;

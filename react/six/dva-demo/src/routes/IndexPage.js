import React from "react";
import { connect } from "dva";
// ？这里的css使用怎么感觉有点不太一样？
// CSS_MODULE
import styles from "./IndexPage.css";
console.log(styles);

// UI
function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! </h1>
      <p>example 中的 name 数据是： {props.name}</p>
      <p>example 中的 age 数据是： {props.age}</p>

      <button onClick={props.onClickChangeName}>
        点我修改 example name 为李四
      </button>

      <button onClick={props.onClickChangeAge}>
        点我修改 example age 为20。延迟2秒修改
      </button>
    </div>
  );
}
// props校验的
IndexPage.propTypes = {};
// props的默认值的
IndexPage.defaultProps = {};

export default connect(
  // mapStateToProps
  ({ example }) => {
    return {
      name: example.name,
      age: example.age
    };
  },
  // mapDispatchToProps
  dispatch => {
    return {
      onClickChangeName() {
        console.log("hhhhh");
        // 使用 dispatch 派发一个动作
        dispatch({
          type: "example/changeName",
          name: "王五"
        });
      },

      onClickChangeAge() {
        // 1. 这块是直接先做异步，在派发一个普通动作对象
        // setTimeout(() => {
        //   dispatch({
        //     type: "example/changeAge",
        //     age: 20
        //   });
        // }, 2000);
        // 2. 直接派发一个异步的动作
        dispatch({
          type: "example/changeAgeSync",
          age: 20
        });
      }
    };
  }
)(IndexPage);

import React from "react";
import { connect } from "react-redux";
import { getBannerList } from "../../store/modules/film/actions";

// UI组件 - 函数形式
// const Films = ({ bannerList, name, handleChangeName }) => {
//   return (
//     <div className="page-home-films">
//       <h1>电影页面 - {name}</h1>
//       <button onClick={handleChangeName}>点我，修改name</button>
//       <ul>
//         {bannerList.map(item => {
//           return <li key={item.bannerId}>{item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// UI组件 - 类形式
class Films extends React.Component {
  render() {
    let { name, bannerList, handleChangeName } = this.props;
    return (
      <div className="page-home-films">
        <h1>电影页面 - {name}</h1>
        <button onClick={handleChangeName}>点我，修改name</button>
        <ul>
          {bannerList.map(item => {
            return <li key={item.bannerId}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.handleGetBannerList();
  }
}

// 暴露的是 connect() 生成的容器组件
// connect 方法接收2个参数，第一个是 mapStateToProps 。 第二个是 mapDispatchToProps
// connect 方法返回的是一个高阶函数，接收一个组件的参数，生成一个新的组件
export default connect(
  /**
   * mapStateToProps 他会在仓库数据发生变化之后，自动再次执行。
   * @param {Object} state store.getState 的返回值
   *
   * @return {Object} 返回的内容是给到UI组件的 props 的
   */
  ({ film }) => {
    return {
      bannerList: film.bannerList,
      name: film.name
    };
  },
  /**
   * mapDispatchToProps
   *
   * @param {Function} dispatch store.dispatch 引用
   *
   * @return {Object} 返回的内容是给到 UI组件的 props的
   */
  dispatch => {
    return {
      handleChangeName: () => {
        dispatch({
          type: "FILM_CHANGE_NAME",
          value: "李四"
        });
      },

      handleGetBannerList: () => {
        dispatch(getBannerList());
      }
    };
  }
)(Films);

// import React from "react";
// import store from "../../store";
// import { getBannerList } from "../../store/modules/film/actions";

// // Films 容器组件
// class Films extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       bannerList: store.getState().film.bannerList
//     };

//     store.subscribe(() => {
//       this.setState({
//         bannerList: store.getState().film.bannerList
//       });
//     });
//   }

//   render() {
//     return <UI bannerList={this.state.bannerList} />;
//   }

//   componentDidMount() {
//     // 请求电影数据
//     store.dispatch(getBannerList());
//   }
// }

// // Films UI组件
// const UI = ({ bannerList }) => {
//   return (
//     <div className="page-home-films">
//       <h1>电影页面</h1>
//       <ul>
//         {bannerList.map(item => {
//           return <li key={item.bannerId}>{item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Films;

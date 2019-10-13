// 高阶函数，登录拦截
import React from "react";
import { Route, Redirect } from "react-router-dom";

// const AuthRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (window.store.isLogin) {
//           return <Component {...props}></Component>;
//         } else {
//           return <Redirect to={`/login?redirect=${props.location.pathname}`} />;
//         }
//       }}
//     />
//   );
// };

class AuthRoute extends React.Component {
  render() {
    let { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (window.store.isLogin) {
            return <Component {...props}></Component>;
          } else {
            return (
              <Redirect to={`/login?redirect=${props.location.pathname}`} />
            );
          }
        }}
      />
    );
  }
}

export default AuthRoute;

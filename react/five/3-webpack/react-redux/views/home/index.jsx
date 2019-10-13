import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./index.scss";

import Films from "./films";
import Cinemas from "./cinemas";
import Center from "./center";

class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <Switch>
          <Route path="/films" component={Films} />
          <Route path="/cinemas" component={Cinemas} />
          <Route path="/center" component={Center} />
        </Switch>

        <ul>
          <li>
            <NavLink to="/films">电影</NavLink>
          </li>
          <li>
            <NavLink to="/cinemas">影院</NavLink>
          </li>
          <li>
            <NavLink to="/center">我的</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;

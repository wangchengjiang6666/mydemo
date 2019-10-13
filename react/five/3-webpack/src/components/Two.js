import React from "react";
import Three from "./Three";

import { Consumer } from "../context/index";

const Two = props => {
  return (
    <Consumer>
      {value => {
        return (
          <div>
            <p>我是 Two 我的爷爷是 {value}</p>

            <Three></Three>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Two;

import React from "react";

import { Consumer } from "../context/index";

const Three = () => {
  return (
    <Consumer>
      {value => {
        return (
          <div>
            <p>我是 Three 我的曾爷爷是 {value}</p>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Three;

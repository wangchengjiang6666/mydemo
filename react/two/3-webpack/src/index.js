import React from "react";
import ReactDOM from "react-dom";
import request from "./utils/request";

ReactDOM.render(<h1>hello 我的天</h1>, document.getElementById("app"));

// 请求一个接口
request.get("/db/date2").then(response => {
  console.log(response.data);
});

request.get("/db/date2").then(response => {
  console.log(response.data);
});

request.get("/db/date2").then(response => {
  console.log(response.data);
});

request.get("/db/date2").then(response => {
  console.log(response.data);
});

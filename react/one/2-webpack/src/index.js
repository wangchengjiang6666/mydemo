// 整个项目的入口js文件

// 引入jquery
import $ from "jquery";
// 引入css
import "./assets/styles/index.css";
// 引入scss
import "./assets/styles/style.scss";

// 引入图片
import myImgUrl from "./assets/images/hello.jpg";

function component() {
  let box = document.createElement("div");
  let img = document.createElement("img");

  img.src = myImgUrl;

  box.appendChild(img);
  return box;
}

document.body.appendChild(component());

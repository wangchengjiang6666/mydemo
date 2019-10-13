import axios from "axios";

const request = axios.create({
  // 开发时我们baseURL地址是 http://locahost:3000
  // 上线时我们baseURl地址是 http://58.87.126.209
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://58.87.126.209"
});

export default request;

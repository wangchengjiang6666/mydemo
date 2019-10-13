/**
 * 获取banner数据
 */
export const getBannerList = () => {
  return (dispatch, getState) => {
    fetch("https://m.maizuo.com/gateway?type=2&cityId=440300&k=5944263", {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15674953519642201579795"}',
        "X-Host": "mall.cfg.common-banner"
      }
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          // 存放到仓库中
          dispatch({
            type: "FILM_SET_BANNER",
            list: res.data
          });
        }
      });
  };
};

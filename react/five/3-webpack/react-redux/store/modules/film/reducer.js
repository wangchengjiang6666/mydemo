const defaultState = {
  bannerList: [],
  name: "张三"
};

export default (state = defaultState, action) => {
  if (action.type === "FILM_SET_BANNER") {
    return Object.assign({}, state, {
      bannerList: action.list
    });
  }

  if (action.type === "FILM_CHANGE_NAME") {
    return Object.assign({}, state, {
      name: action.value
    });
  }

  return state;
};

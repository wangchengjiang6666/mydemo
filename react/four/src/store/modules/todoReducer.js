// todoApp的仓库模块， 仍然是一个纯函数，
import { CHANGE_INPUTE, ADD_TODO, INIT_TODO } from "../actionTypes";

const defaultState = {
  inputVal: "hello",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUTE) {
    // 将 action 上传递过来的 value 赋值给 state.inputVal
    // state.inputVal = action.value; // ×
    return Object.assign({}, state, {
      inputVal: action.value
    });
  } else if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      list: [
        ...state.list,
        {
          name: state.inputVal,
          id: state.list.length + 1
        }
      ]
    });
  } else if (action.type === INIT_TODO) {
    return Object.assign({}, state, {
      list: action.list
    });
  } else {
    return state;
  }
};

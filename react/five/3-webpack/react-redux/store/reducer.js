// 主reducer
import { combineReducers } from "redux";

import filmReducer from "./modules/film/reducer";

export default combineReducers({
  film: filmReducer
});

import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer //userReducer: userReducer
});

export default rootReducer;

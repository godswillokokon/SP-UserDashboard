import { combineReducers } from "redux";
import userReducer from "./User";
import reservedReducer from "./reserved_propety";

export default combineReducers({
  user: userReducer,
  reserved: reservedReducer,
});

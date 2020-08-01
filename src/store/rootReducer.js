import { combineReducers } from "redux";
import userReducer from "./User";
import reservedReducer from "./reserved_propety";
import walletReducer from "./wallet";

export default combineReducers({
  user: userReducer,
  reserved: reservedReducer,
  walllet: walletReducer,
});

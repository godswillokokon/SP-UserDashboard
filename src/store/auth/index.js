import authActionTypes from "./actionTypes";
import Cookies from "js-cookie";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.RESET: {
      Cookies.remove("token");
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;

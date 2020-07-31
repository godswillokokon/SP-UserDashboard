import authActionTypes from "./actionTypes";

export const logout = () => (dispatch) => {
  return dispatch({ type: authActionTypes.RESET });
};

export const reset = () => (dispatch) =>
  dispatch({ type: authActionTypes.RESET });

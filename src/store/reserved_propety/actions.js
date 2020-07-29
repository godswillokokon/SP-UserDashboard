import api from "utils/api";
import reservedActionTypes from "./actionTypes";

export const fetchReservedHouse = () => (dispatch) => {
  const payload = api.get("/user/reserved");
  return dispatch({
    type: reservedActionTypes.FETCH_RESERVED_HOUSE.default,
    payload,
  });
};

import api from "utils/api";
import userActionTypes from "./actionTypes";

export const becomeAgent = ({ ...data }) => (dispatch) => {
  const payload = api.post("/agent", { ...data });
  return dispatch({
    type: userActionTypes.BECOME_AGENT.default,
    payload,
  });
};

export const fetchUserProfile = () => (dispatch) => {
  const payload = api.get("/profile");
  return dispatch({ type: userActionTypes.FETCH_USER.default, payload });
};

import userActionTypes from "./actionTypes";
import parseError from "../../utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userActionTypes.FETCH_USER.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, ...action.payload.data.user },
      };
    }
    case userActionTypes.FETCH_USER.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // become an agents

    case userActionTypes.BECOME_AGENT.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userActionTypes.BECOME_AGENT.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case userActionTypes.BECOME_AGENT.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }

    default:
      return state;
  }
};

export default userReducer;

import reservedActionTypes from "./actionTypes";
import parseError from "../../utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const reservedReducer = (state = initialState, action) => {
  switch (action.type) {
    case reservedActionTypes.FETCH_RESERVED_HOUSE.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case reservedActionTypes.FETCH_RESERVED_HOUSE.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, ...action.payload.data },
      };
    }
    case reservedActionTypes.FETCH_RESERVED_HOUSE.rejected: {
      return {
        ...state,
        loading: false,
        error: parseError(action.payload),
      };
    }
    // become an agents

    default:
      return state;
  }
};

export default reservedReducer;

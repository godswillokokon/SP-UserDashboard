import walletActionTypes from "./actionTypes";
import parseError from "../../utils/ParseError";

const initialState = {
  data: null,
  actionLoading: false,
  loading: false,
  error: null,
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    // case walletActionTypes.FETCH_USER.pending: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // }
    // case walletActionTypes.FETCH_USER.fulfilled: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //     data: { ...state.data, ...action.payload.data.user },
    //   };
    // }
    // case walletActionTypes.FETCH_USER.rejected: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: parseError(action.payload),
    //   };
    // }
    // fund wallet

    case walletActionTypes.FUND_WALLET.pending: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case walletActionTypes.FUND_WALLET.fulfilled: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case walletActionTypes.FUND_WALLET.rejected: {
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

export default walletReducer;

import api from "utils/api";
import walletActionTypes from "./actionTypes";

export const fundWallet = ({ ...data }) => (dispatch) => {
  console.log("I got here");
  const payload = api.post("/property_wallet/credit", { ...data });
  return dispatch({
    type: walletActionTypes.FUND_WALLET.default,
    payload,
  });
};

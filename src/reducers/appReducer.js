import { handleActions } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

const defaultState = {
  isLoading: true,
  currencies: [],
  latestExchangeRates: [],
  selectedCurrencyCode: null,
  monetaryInput: null,
  isSelectedCurrencyPopUpOpen: false,
};

export default handleActions(
  {
    [types.HELLO_WORLD]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
  defaultState
);

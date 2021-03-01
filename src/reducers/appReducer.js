import { handleActions } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

const defaultState = {
  isLoading: true,
  currencies: [],
  latestExchangeRates: [],
  selectedCurrencyCode: null,
  monetaryInputValue: null,
  isSelectedCurrencyPopUpOpen: false,
};

export default handleActions(
  {
    [types.HELLO_WORLD]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.CHANGE_MONETARY_INPUT]: (state, { payload }) => ({
      ...state,
      monetaryInputValue: payload,
    }),
  },
  defaultState
);

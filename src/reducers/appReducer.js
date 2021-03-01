import { handleActions } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

const defaultState = {
  isLoading: true,
  currencies: [],
  latestExchangeRates: [],
  selectedCurrencyCode: "USD",
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
    [types.CHANGE_SELECTED_CURRENCY_CODE]: (state, { payload }) => ({
      ...state,
      selectedCurrencyCode: payload,
    }),
    [types.OPEN_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedCurrencyPopUpOpen: true,
    }),
    [types.CLOSE_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedCurrencyPopUpOpen: false,
    }),
  },
  defaultState
);

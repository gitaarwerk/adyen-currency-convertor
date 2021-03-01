import { handleActions } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

const defaultState = {
  isLoading: false,
  selectedOutputCurrencies: ["EUR", "GBP"],
  latestExchangeRates: [],
  selectedCurrencyCode: "USD",
  monetaryInputValue: null,
  isSelectedCurrencyPopUpOpen: false,
};

export default handleActions(
  {
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
    [types.FETCH_LATEST_EXCHANGE_RATES]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [types.FETCH_LATEST_EXCHANGE_RATES_FAILED]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [types.FETCH_LATEST_EXCHANGE_RATES_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      latestExchangeRates: payload,
    }),
  },
  defaultState
);

import { handleActions } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

const defaultState = {
  isLoading: false,
  selectedOutputCurrencies: ["USD", "GBP"],
  latestExchangeRates: [],
  selectedCurrencyCode: "EUR",
  monetaryInputValue: null,
  isSelectedInputCurrencyPopUpOpen: false,
  isSelectedOutputCurrencyPopUpOpen: false,
};

export default handleActions(
  {
    [types.CHANGE_MONETARY_INPUT]: (state, { payload }) => ({
      ...state,
      monetaryInputValue: payload,
    }),
    [types.CHANGE_SELECTED_INPUT_CURRENCY_CODE]: (state, { payload }) => ({
      ...state,
      selectedCurrencyCode: payload,
      latestExchangeRates: [],
    }),
    [types.CHANGE_SELECTED_OUTPUT_CURRENCY_CODE]: (state, { payload }) => ({
      ...state,
      selectedOutputCurrencies: payload,
    }),
    [types.OPEN_INPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedInputCurrencyPopUpOpen: true,
    }),
    [types.CLOSE_INPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedInputCurrencyPopUpOpen: false,
    }),
    [types.OPEN_INPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedInputCurrencyPopUpOpen: true,
    }),
    [types.CLOSE_INPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedOutputCurrencyPopUpOpen: false,
    }),
    [types.OPEN_OUTPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedOutputCurrencyPopUpOpen: true,
    }),
    [types.CLOSE_OUTPUT_CURRENCY_CODE_SELECTOR]: (state) => ({
      ...state,
      isSelectedOutputCurrencyPopUpOpen: false,
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

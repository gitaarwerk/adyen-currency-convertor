import { createAction as create } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

export const onChangeMonetaryInput = create(types.CHANGE_MONETARY_INPUT);

export const changeSelectedInputCurrencyCode = create(
  types.CHANGE_SELECTED_INPUT_CURRENCY_CODE
);

export const changeSelectedOutputCurrencyCode = create(
  types.CHANGE_SELECTED_OUTPUT_CURRENCY_CODE
);

export const openInputCurrencySelector = create(
  types.OPEN_INPUT_CURRENCY_CODE_SELECTOR
);
export const closeInputCurrencySelector = create(
  types.CLOSE_INPUT_CURRENCY_CODE_SELECTOR
);

export const openOutputCurrencySelector = create(
  types.OPEN_OUTPUT_CURRENCY_CODE_SELECTOR
);
export const closeOutputCurrencySelector = create(
  types.CLOSE_OUTPUT_CURRENCY_CODE_SELECTOR
);

export const fetchLatestExchangeRates = create(
  types.FETCH_LATEST_EXCHANGE_RATES
);
export const fetchLatestExchangeRatesSuccess = create(
  types.FETCH_LATEST_EXCHANGE_RATES_SUCCESS
);
export const fetchLatestExchangeRatesFailed = create(
  types.FETCH_LATEST_EXCHANGE_RATES_FAILED
);

export const changeInputCurrencyOnClick = create(
  types.CHANGE_INPUT_CURRENCY_ON_CLICK
);

export const addCharacterAtEnd = create(types.ADD_CHARACTER_AT_END);

export const clearInput = create(types.CLEAR_INPUT);

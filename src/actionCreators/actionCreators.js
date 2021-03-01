import { createAction as create } from "redux-actions";
import * as types from "../actionTypes/actionTypes";

export const helloWorld = create(types.HELLO_WORLD);

export const onChangeMonetaryInput = create(types.CHANGE_MONETARY_INPUT);

export const changeSelectedCurrencyCode = create(
  types.CHANGE_SELECTED_CURRENCY_CODE
);

export const openCurrencySelector = create(types.OPEN_CURRENCY_CODE_SELECTOR);
export const closeCurrencySelector = create(types.CLOSE_CURRENCY_CODE_SELECTOR);

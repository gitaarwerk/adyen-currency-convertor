import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

export const helloWorld = create(types.HELLO_WORLD);

export const onChangeMonetaryInput = create(types.CHANGE_MONETARY_INPUT);

export const changeSelectedCurrencyCode = create(types.CHANGE_SELECTED_CURRENCY_CODE);
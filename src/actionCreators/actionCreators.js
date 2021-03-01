import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

export const helloWorld = create(types.HELLO_WORLD);


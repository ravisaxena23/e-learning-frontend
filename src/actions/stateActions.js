// exampleActions.js
import { SET_STATE_DATA } from './actionTypes';

export const setStateData = (data) => ({
  type: SET_STATE_DATA,
  payload: data,
});
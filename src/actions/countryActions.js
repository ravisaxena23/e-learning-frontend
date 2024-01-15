// exampleActions.js
import { SET_COUNTRY_DATA } from './actionTypes';

export const setCountryData = (data) => ({
  type: SET_COUNTRY_DATA,
  payload: data,
});
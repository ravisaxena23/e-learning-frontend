import { SET_COUNTRY_DATA } from '../actions/actionTypes';

const initialState = {
  data: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;

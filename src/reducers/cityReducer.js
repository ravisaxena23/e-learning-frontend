import { SET_CITY_DATA } from '../actions/actionTypes';

const initialState = {
  data: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;

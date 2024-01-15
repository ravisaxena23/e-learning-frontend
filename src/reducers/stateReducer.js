import { SET_STATE_DATA } from '../actions/actionTypes';

const initialState = {
  data: null,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default stateReducer;

import { SET_COLLEGE_DATA } from '../actions/actionTypes';

const initialState = {
  data: [],
};

const collegeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLEGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default collegeReducer;

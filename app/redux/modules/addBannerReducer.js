import {
  ADD_BANNER_REQUESTED,
  ADD_BANNER_SUCCESS,
  ADD_BANNER_FAILED,
} from '../constants/bannerConstants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const bannerData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANNER_REQUESTED:
      console.log(action, 'add banner requested reducer');
      return {
        ...state,
        loading: true,
      };
    case ADD_BANNER_SUCCESS:
      console.log(action, 'add banner success reducer');
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case ADD_BANNER_FAILED:
      console.log(action, 'add banner failed reducer');
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

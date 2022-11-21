import {
  BLOCK_USER_REQUESTED,
  BLOCK_USER_SUCCESS,
  BLOCK_USER_FAILED,
} from '../constants/usersConstants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const blockUserData = (state = initialState, action) => {
  switch (action.type) {
    case BLOCK_USER_REQUESTED:
      console.log(action, 'block user requested reducer');
      return {
        ...state,
        loading: true,
      };
    case BLOCK_USER_SUCCESS:
      console.log(action, 'block user success reducer');
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case BLOCK_USER_FAILED:
      console.log(action, 'block user failed reducer');
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

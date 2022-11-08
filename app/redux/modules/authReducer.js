import {
  LOGIN_ADMIN_REQUESTED,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILED,
} from "../constants/authConstants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const authData = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_REQUESTED:
      console.log(action, "login admin requested reducer");
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ADMIN_SUCCESS:
      console.log(action, "login admin success reducer");
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case LOGIN_ADMIN_FAILED:
      console.log(action, "login admin failed reducer");
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

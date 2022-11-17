import {
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../constants/usersConstants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      console.log(action, "GET USER requested reducer");
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      console.log(action, "GET USER success reducer");
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USERS_FAILED:
      console.log(action, "GET USER failed reducer");
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

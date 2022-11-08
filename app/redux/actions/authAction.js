import {
  LOGIN_ADMIN_REQUESTED,
  LOGIN_ADMIN_SUCCESS,
} from "../constants/authConstants";

export function loginAdmin(data) {
  console.log(data, "login admin action");
  return {
    type: LOGIN_ADMIN_REQUESTED,
    payload: data,
  };
}

export function resetloginAdmin(data) {
  console.log("reset login admin action");
  return {
    type: LOGIN_ADMIN_SUCCESS,
    payload: null,
  };
}

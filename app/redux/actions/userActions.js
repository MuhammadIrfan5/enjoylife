import { GET_USERS_REQUESTED } from "./../constants/usersConstants";

export function getUsers() {
  console.log("get users action");
  return {
    type: GET_USERS_REQUESTED,
    // payload: data,
  };
}

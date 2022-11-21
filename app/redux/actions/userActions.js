import {
  GET_USERS_REQUESTED,
  BLOCK_USER_REQUESTED,
} from '../constants/usersConstants';

export function getUsers() {
  console.log('get users action');
  return {
    type: GET_USERS_REQUESTED,
    // payload: data,
  };
}

export function blockUser(data) {
  console.log('block user action', data);
  return {
    type: BLOCK_USER_REQUESTED,
    payload: data,
  };
}

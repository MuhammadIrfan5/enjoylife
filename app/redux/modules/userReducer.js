import { SET_USER_DATA } from '../constants/usersConstants';

export const userData = (data = [], action) => {
  console.log(action, 'reducer called');

  switch (action.type) {
    case SET_USER_DATA:
      console.log('SET_USER_DATA condition', action);
      return [...action.user];
    default:
      return data;
  }
};

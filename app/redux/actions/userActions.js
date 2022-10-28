import { GET_USER_DATA } from '../constants/usersConstants';

export const getUsers = () => {
  console.log('getUsers action is called');

  return {
    type: GET_USER_DATA,
    //   data,
  };
};

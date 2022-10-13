import { Map, fromJS } from 'immutable';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  usersLogin: Map({
    email: 'muhammadirfan5891@gmail.com',
    password: '12345678',
    remember: false
  })
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}

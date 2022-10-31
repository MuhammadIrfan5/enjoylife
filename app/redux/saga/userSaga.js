import { takeEvery, put } from 'redux-saga/effects';
// import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";
import { GET_USER_DATA, SET_USER_DATA } from '../constants/usersConstants';

function* getAllUsers() {
  console.log('get product saga called');

  let data = yield fetch('https://randomuser.me/api/');
  data = yield data.json();
  console.log(data.results, 'api dataaaaaaa');
  const user = data.results;

  yield put({ type: SET_USER_DATA, user });
}

function* userSaga() {
  yield takeEvery(GET_USER_DATA, getAllUsers);
}

export default userSaga;

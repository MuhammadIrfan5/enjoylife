import { call, put, takeEvery } from 'redux-saga/effects';

import {
  BLOCK_USER_REQUESTED,
  BLOCK_USER_SUCCESS,
  BLOCK_USER_FAILED,
} from '../constants/usersConstants';

function* blockUser(action) {
  const SessionData = JSON.parse(localStorage.getItem('SessionData'));
  console.log(SessionData, 'tokennnnn');
  console.log(action, 'data from function');
  const { userId } = action.payload;
  console.log(userId, 'user iddd');
  //   return;
  try {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    // myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    let data = yield fetch(
      `http://34.125.246.209:3000/be/api/v1/dashboard/user/block?user_id=${userId}`,
      requestOptions
    );
    // console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, 'api dataaaaaaa');

    // dispatch a success action to the store with the customers
    yield put({ type: BLOCK_USER_SUCCESS, data });
  } catch (error) {
    console.log(error.message, 'error');
    // dispatch a failure action to the store with the error
    yield put({ type: BLOCK_USER_FAILED, error: 'Something went wrong' });
  }
}

function* blockUserSaga() {
  yield takeEvery(BLOCK_USER_REQUESTED, blockUser);
}

export default blockUserSaga;

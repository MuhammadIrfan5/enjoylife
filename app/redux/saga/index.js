import { all } from 'redux-saga/effects';

import adminLoginSaga from './adminLoginSaga';
import userSaga from './userSaga';
import addBannerSaga from './addBannerSaga';
import blockUserSaga from './blockUserSaga';

export default function* rootSaga() {
  yield all([adminLoginSaga(), userSaga(), addBannerSaga(), blockUserSaga()]);
  //   yield all([userSaga(), addProductSaga()]);
}

import { all } from 'redux-saga/effects';

import adminLoginSaga from './adminLoginSaga';
import userSaga from './userSaga';
import addBannerSaga from './addBannerSaga';

export default function* rootSaga() {
  yield all([adminLoginSaga(), userSaga(), addBannerSaga()]);
  //   yield all([userSaga(), addProductSaga()]);
}

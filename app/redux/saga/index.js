import { all } from "redux-saga/effects";

import adminLoginSaga from "./adminLoginSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([adminLoginSaga(), userSaga()]);
  yield all([userSaga(), addProductSaga()]);
}

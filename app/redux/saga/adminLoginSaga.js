import { call, put, takeEvery } from "redux-saga/effects";
import { apiActiveURL } from "../../ApiBaseURL";

// import {
//   ADD_PRODUCT_REQUESTED,
//   ADD_PRODUCT_SUCCESS,
//   ADD_PRODUCT_FAILED,
// } from "../constants";

import {
  LOGIN_ADMIN_REQUESTED,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILED,
} from "../constants/authConstants";
// import { loginAdmin } from "./../actions/authAction";

function* addProduct(action) {
  console.log(action, "data from function");
  const { payload } = action;
  console.log(payload, "payload");
  //   return;
  try {
    let data = yield fetch(
      // 34.125.24.0
      `${apiActiveURL}be/api/v1/dashboard/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: payload.adminEmail,
          password: payload.password,
          // phone: 921033333333,
        }),
      }
    );
    // console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, "api dataaaaaaa");

    // dispatch a success action to the store with the customers
    yield put({ type: LOGIN_ADMIN_SUCCESS, data: data });
  } catch (error) {
    console.log(error.message, "error");
    // dispatch a failure action to the store with the error
    yield put({ type: LOGIN_ADMIN_FAILED, error: "Something went wrong" });
  }
}

function* adminLoginSaga() {
  yield takeEvery(LOGIN_ADMIN_REQUESTED, addProduct);
}

export default adminLoginSaga;

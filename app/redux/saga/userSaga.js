import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../constants/usersConstants";
import { apiActiveURL } from "../../ApiBaseURL";

function* getAllUsers(action) {
  const SessionData = JSON.parse(localStorage.getItem("SessionData"));
  console.log(SessionData, "tokennnnn");
  console.log(action, "data from function");
  //   return;
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let data = yield fetch(
      `${apiActiveURL}be/api/v1/dashboard/user/all?page=&size=`,
      requestOptions
    );
    // console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, "api dataaaaaaa");

    // dispatch a success action to the store with the customers
    yield put({ type: GET_USERS_SUCCESS, data });
  } catch (error) {
    console.log(error.message, "error");
    // dispatch a failure action to the store with the error
    yield put({ type: GET_USERS_FAILED, error: "Something went wrong" });
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getAllUsers);
}

export default userSaga;

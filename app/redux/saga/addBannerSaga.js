import { call, put, takeEvery } from "redux-saga/effects";

import {
  ADD_BANNER_REQUESTED,
  ADD_BANNER_SUCCESS,
  ADD_BANNER_FAILED,
} from "../constants/bannerConstants";

function* addBanner(action) {
  const SessionData = JSON.parse(localStorage.getItem("SessionData"));
  console.log(SessionData, "tokennnnn");
  console.log(action, "data from function");
  const { payload } = action;
  console.log(payload, "payload");
  console.log(payload.bannerImage[0], "image in add banner saga");

  var formdata = new FormData();
  formdata.append(
    "file",
    payload.bannerImage[0]
    // payload.bannerImage[0].path
  );

  //   return;
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    // myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Content-Type", "multipart/form-data");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify({
      banners: [
        {
          name: payload.bannerTitle,
          image_url: payload.bannerImage[0].name,
        },
      ],
    });

    // const imageUpload = JSON.stringify({
    //   image: [
    //     {
    //       file: payload.bannerImage[0],
    //     },
    //   ],
    // });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    var requestImageUpload = {
      method: "POST",
      headers: myHeaders,
      // headers: {
      //   Accept: "application/json",
      //   mode: "cors",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "http://localhost:3001",
      // },
      body: formdata,
      redirect: "follow",
    };

    // const requestImageUpload = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: imageUpload,
    //   redirect: "follow",
    // };

    // "http://34.125.246.209:3000/be/api/v1/file/admin/upload",

    // let data = yield fetch(
    //   "https://7e6c-59-103-203-149.in.ngrok.io/be/api/v1/file/admin/upload",
    //   { mode: "no-cors" },
    //   requestImageUpload
    // );

    let data = yield fetch(
      "https://7e6c-59-103-203-149.in.ngrok.io/be/api/v1/file/admin/upload",
      { mode: "no-cors" },
      requestImageUpload
    );
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
    // console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, "api dataaaaaaa");

    // dispatch a success action to the store with the customers
    yield put({ type: ADD_BANNER_SUCCESS, data });
  } catch (error) {
    console.log(error.message, "error");
    // dispatch a failure action to the store with the error
    yield put({ type: ADD_BANNER_FAILED, error: "Something went wrong" });
  }
}

function* addBannerSaga() {
  yield takeEvery(ADD_BANNER_REQUESTED, addBanner);
}

export default addBannerSaga;

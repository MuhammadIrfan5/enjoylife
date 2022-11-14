import { call, put, takeEvery } from 'redux-saga/effects';

import {
  ADD_BANNER_REQUESTED,
  ADD_BANNER_SUCCESS,
  ADD_BANNER_FAILED,
} from '../constants/bannerConstants';

function* addBanner(action) {
  const SessionData = JSON.parse(localStorage.getItem('SessionData'));
  console.log(SessionData, 'tokennnnn');
  console.log(action, 'data from function');
  const { payload } = action;
  console.log(payload, 'payload');
  console.log(payload.bannerImage[0].name, 'imagee');

  //   return;
  try {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      banners: [
        {
          name: payload.bannerTitle,
          image_url: payload.bannerImage[0].name,
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    let data = yield fetch(
      'http://34.125.246.209:3000/be/api/v1/dashboard/banner/add',
      requestOptions
    );
    // console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, 'api dataaaaaaa');

    // dispatch a success action to the store with the customers
    yield put({ type: ADD_BANNER_SUCCESS, data });
  } catch (error) {
    console.log(error.message, 'error');
    // dispatch a failure action to the store with the error
    yield put({ type: ADD_BANNER_FAILED, error: 'Something went wrong' });
  }
}

function* addBannerSaga() {
  yield takeEvery(ADD_BANNER_REQUESTED, addBanner);
}

export default addBannerSaga;

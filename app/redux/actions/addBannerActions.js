import {
  ADD_BANNER_REQUESTED,
  ADD_BANNER_SUCCESS,
} from '../constants/bannerConstants';
export function postBanner(data) {
  console.log(data, 'post banner action');
  return {
    type: ADD_BANNER_REQUESTED,
    payload: data,
  };
}

export function resetAddBanner() {
  console.log('reset post banner action');
  return {
    type: ADD_BANNER_SUCCESS,
    payload: null,
  };
}

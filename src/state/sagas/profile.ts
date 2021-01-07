import {call, put, takeLeading} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {GET_PROFILE_DATA} from "state/ducks/user/types";

function* getProfileData(action: PayloadAction<string>) {
  try {
    // const data = yield call(getProfileDataService, action.payload)
  } catch (e) {
    console.log(e.message)
  }
}

export function* watchGetProfileData() {
  yield takeLeading(GET_PROFILE_DATA, getProfileData);
}

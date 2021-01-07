import {call, put, takeLeading} from "redux-saga/effects";
import {getCurrentProfile as getCurrentProfileService} from "services/profile";
import {updateProfile} from 'state/ducks/profile'
import {GET_CURRENT_PROFILE} from "state/ducks/profile/types";
import {Profile} from "interfaces/profile";

function* getCurrentProfile() {
  try {
    const profile: Profile = yield call(getCurrentProfileService)
    console.log(profile)
    yield put(updateProfile(profile))
  } catch (e) {
    console.error(e.message)
  }
}

export function* watchProfile() {
  yield takeLeading(GET_CURRENT_PROFILE, getCurrentProfile);
}

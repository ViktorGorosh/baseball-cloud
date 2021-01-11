import {call, put, takeLeading} from "redux-saga/effects";
import {getCurrentProfile as getCurrentProfileService} from "services/profile";
import {updateProfile} from 'state/ducks/profile'
import { setError } from "state/ducks/meta";
import {GET_CURRENT_PROFILE} from "state/ducks/profile/types";
import {Profile} from "interfaces/profile";

function* getCurrentProfile() {
  try {
    const profile: Profile = yield call(getCurrentProfileService)
    yield put(updateProfile(profile))
  } catch (e) {
    yield put(setError('Failed to fetch profile data'))
  }
}

export function* watchProfile() {
  yield takeLeading(GET_CURRENT_PROFILE, getCurrentProfile);
}

import {call, put, takeLeading} from "redux-saga/effects";
import {getCurrentProfile as getCurrentProfileService} from "services/profile";
import {getSchools} from "services/schools";
import {updateProfile} from 'state/ducks/profile'
import {setError} from "state/ducks/meta";
import {GET_CURRENT_PROFILE} from "state/ducks/profile/types";
import {Profile} from "interfaces/profile";
import {School} from "interfaces/school";

function* getCurrentProfile() {
  try {
    const profile: Profile = yield call(getCurrentProfileService)
    const schools: School[] = yield call(getSchools)
    yield put(updateProfile(profile))
  } catch (e) {
    yield put(setError(e.message))
  }
}

export function* watchProfile() {
  yield takeLeading(GET_CURRENT_PROFILE, getCurrentProfile);
}

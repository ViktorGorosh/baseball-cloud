import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from "./authentication";
import {watchGetProfileData} from "./profile";

export default function* rootSaga() {
	yield all([
		watchUserAuthentication(),
		watchGetProfileData()
	]);
}

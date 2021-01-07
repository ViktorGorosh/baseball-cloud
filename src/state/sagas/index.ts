import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from "./authentication";
import {watchProfile} from "./profile";

export default function* rootSaga() {
	yield all([
		watchUserAuthentication(),
		watchProfile()
	]);
}

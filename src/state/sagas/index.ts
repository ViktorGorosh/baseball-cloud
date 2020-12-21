import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from "./authentication";

export default function* rootSaga() {
	yield all([
		watchUserAuthentication()
	]);
}

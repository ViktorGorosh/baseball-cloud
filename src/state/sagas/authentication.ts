import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {SIGN_IN} from "state/ducks/user/types";
import {loginSuccess} from 'state/ducks/user'
import {loginUserService} from "services/authentication";
import {LoginPayload, User} from "interfaces/user";

function* login(action: PayloadAction<LoginPayload>) {

	try {
		const data: User = yield call(loginUserService, action.payload)
		console.log('Login: ', data)
		yield put(loginSuccess(data))
	} catch (e) {
		console.log(e)
	}
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
}

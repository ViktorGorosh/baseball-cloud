import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {SIGN_IN, SIGN_UP} from "state/ducks/user/types";
import {loginSuccess} from 'state/ducks/user'
import {loginUserService, registerUserService} from "services/authentication";
import {LoginPayload, RegisterPayload, User} from "interfaces/user";

function* login(action: PayloadAction<LoginPayload>) {
	try {
		const data: User = yield call(loginUserService, action.payload)
		console.log('Login data: ', data)
		yield put(loginSuccess(data))
	} catch (e) {
		console.log(e)
	}
}

function* register(action: PayloadAction<RegisterPayload>) {
	try {
		const data: User = yield call(registerUserService, action.payload)
		console.log('Register data: ', data)
		yield put(loginSuccess(data))
	} catch (e) {
		console.log(e)
	}
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
	yield takeLeading(SIGN_UP, register);
}

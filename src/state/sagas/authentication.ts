import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {getProfileData, loginSuccess} from 'state/ducks/user'
import {authorizedOn} from 'state/ducks/meta'
import {loginUserService, registerUserService} from "services/authentication";
import {LoginPayload, RegisterPayload, User} from "interfaces/user";
import {SIGN_IN, SIGN_UP} from "state/ducks/user/types";

function* login(action: PayloadAction<LoginPayload>) {
	try {
		const data: User = yield call(loginUserService, action.payload)
		yield put(loginSuccess(data))
		// yield put(getProfileData(data.id.toString()))
		yield put(authorizedOn())
	} catch (e) {
		console.log(e)
	}
}

function* register(action: PayloadAction<RegisterPayload>) {
	try {
		const data: User = yield call(registerUserService, action.payload)
		yield put(loginSuccess(data))
		yield put(authorizedOn())
	} catch (e) {
		console.log(e)
	}
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
	yield takeLeading(SIGN_UP, register);
}

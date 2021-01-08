import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {loginSuccess} from 'state/ducks/user'
import {authorizedOn, resetError, setError} from 'state/ducks/meta'
import {loginUserService, registerUserService} from "services/authentication";
import {LoginPayload, RegisterPayload, User} from "interfaces/user";
import {SIGN_IN, SIGN_UP} from "state/ducks/user/types";

function* login(action: PayloadAction<LoginPayload>) {
	try {
		const data = yield call(loginUserService, action.payload)
		yield put(resetError())
		yield put(loginSuccess(data))
		yield put(authorizedOn())
	} catch (e) {
		yield put(setError('Invalid login credentials. Please try again.'))
	}
}

function* register(action: PayloadAction<RegisterPayload>) {
	try {
		const data: User = yield call(registerUserService, action.payload)
		yield put(resetError())
		yield put(loginSuccess(data))
		yield put(authorizedOn())
	} catch (e) {
		yield put(setError('Invalid credentials. Please try again.'))
	}
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
	yield takeLeading(SIGN_UP, register);
}

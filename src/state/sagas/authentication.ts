import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {loginSuccess, resetUser} from 'state/ducks/user'
import {authorizedOff, authorizedOn, resetError, setError} from 'state/ducks/meta'
import {loginUserService, registerUserService, validateTokenService, signOutService} from "services/authentication";
import {LoginPayload, RegisterPayload, User} from "interfaces/user";
import {SIGN_IN, SIGN_OUT, SIGN_UP, VALIDATE_TOKEN} from "state/ducks/user/types";

function* login(action: PayloadAction<LoginPayload>) {
	try {
		const user: User = yield call(loginUserService, action.payload)
		yield put(resetError())
		yield put(loginSuccess(user))
		yield put(authorizedOn())
	} catch (e) {
		yield put(setError('Invalid login credentials. Please try again.'))
	}
}

function* register(action: PayloadAction<RegisterPayload>) {
	try {
		const user: User = yield call(registerUserService, action.payload)
		yield put(resetError())
		yield put(loginSuccess(user))
		yield put(authorizedOn())
	} catch (e) {
		yield put(setError('Invalid credentials. Please try again.'))
	}
}

function* signOut() {
	try {
		yield call(signOutService)
		yield put(authorizedOff())
		yield put(resetUser())
	} catch (e) {
		yield put(setError('Failed to sign out'))
	}
}

function* validateToken() {
	if (localStorage['access-token'] && localStorage.uid && localStorage.client) {
		try {
			const user = yield call(validateTokenService)
			yield put(resetError())
			yield put(loginSuccess(user))
			yield put(authorizedOn())
		} catch (e) {
			console.error(e.message)
		}
	}
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
	yield takeLeading(SIGN_UP, register);
	yield takeLeading(VALIDATE_TOKEN, validateToken);
	yield takeLeading(SIGN_OUT, signOut);
}

import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {SIGN_IN} from "state/ducks/user/types";
import {loginUserService} from "services/authentication";
import {LoginPayload} from "interfaces/user";

function* login(action: PayloadAction<LoginPayload>) {
	const data = yield call(loginUserService, action.payload)
	console.log(data)
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
}

import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLeading} from 'redux-saga/effects';
import {SIGN_IN} from "state/ducks/user/types";
import {LoginPayload} from "interfaces/user";

function* login(action: PayloadAction<LoginPayload>) {
	yield console.log('sign in')
}

export function* watchUserAuthentication() {
	yield takeLeading(SIGN_IN, login);
}

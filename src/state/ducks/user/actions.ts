import {createAction} from "@reduxjs/toolkit";
import {user} from "./reducers";
import {SIGN_IN, SIGN_UP, GET_PROFILE_DATA} from "./types";
import {LoginPayload, RegisterPayload} from "interfaces/user";

export const { loginSuccess } = user.actions

export const signIn = createAction(SIGN_IN, function (payload: LoginPayload) {
	return {payload};
});

export const signUp = createAction(SIGN_UP, function (payload: RegisterPayload) {
	return {payload};
});

export const getProfileData = createAction(GET_PROFILE_DATA, function (payload: string) {
	return {payload}
})

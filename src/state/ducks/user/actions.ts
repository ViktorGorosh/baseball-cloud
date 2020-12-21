import {createAction} from "@reduxjs/toolkit";
import {user} from "./reducers";
import {SIGN_IN} from "./types";
import {LoginPayload} from "interfaces/user";

export const { login } = user.actions

export const signIn = createAction(SIGN_IN, function (payload: LoginPayload) {
	return {payload};
});

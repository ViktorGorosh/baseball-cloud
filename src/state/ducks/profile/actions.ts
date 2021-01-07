import {profile} from "./reducers";
import {createAction} from "@reduxjs/toolkit";
import {GET_CURRENT_PROFILE} from "./types";

export const {updateProfile} = profile.actions

export const getCurrentProfile = createAction(GET_CURRENT_PROFILE);

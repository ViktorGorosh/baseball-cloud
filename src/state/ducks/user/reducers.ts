import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "interfaces/user";

const initialState = {}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<Partial<User>>) => ({
			...state,
			...action.payload
		})
	}
})

export default user.reducer

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "interfaces/user";

const initialState = {
	id: 1,
	name: 'Aноним',
	isAuthorized: false
}

export const user = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<Partial<User>>) => ({
			...state,
			...action.payload
		})
	}
})

export default user.reducer

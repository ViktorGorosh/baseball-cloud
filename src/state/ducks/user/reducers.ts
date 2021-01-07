import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "interfaces/user";

const initialState: User = {
	id: 0,
	direct_paid: false,
	email: '',
	paid: false,
	plan_id: null,
	role: 'player',
	team_avatar: {
		url: null,
		size_20_20: {
			url: null
		},
		size_32_32: {
			url: null
		},
		size_40_40: {
			url: null
		},
		size_100_100: {
			url: null
		}
	},
	team_user: false,
	u_name: null,
	uid: '',
	unsubscribe: false
}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<User>) => action.payload
	}
})

export default user.reducer

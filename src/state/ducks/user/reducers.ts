import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	id: 1,
	name: 'Aноним',
	isAuthorized: false
}

export const user = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.name = action.payload
			state.isAuthorized = true
		}
	}
})

export default user.reducer

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile} from 'interfaces/profile'

const initialState: Profile = {
  age: null,
  avatar: null,
  bats_hand: null,
  biography: '',
  facilities: [],
  feet: null,
  first_name: null,
  id: '',
  inches: null,
  last_name: null,
  position: null,
  position2: null,
  school: null,
  school_year: null,
  teams: [],
  throws_hand: null,
  weight: null
}

export const profile = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<Profile>>) => ({
      ...state,
      ...action.payload
    })
  }
})

export default profile.reducer

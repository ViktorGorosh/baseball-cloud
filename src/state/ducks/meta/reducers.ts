import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Meta} from 'interfaces/meta';

const initialState: Meta = {
  isLoading: false,
  error: '',
  isAuthorized: false,
};

export const meta = createSlice({
  name: 'download',
  initialState,
  reducers: {
    loadingOn: (state) => ({
      ...state,
      isLoading: true,
    }),
    loadingOff: (state) => ({
      ...state,
      isLoading: false,
    }),
    setError: (state, action: PayloadAction<Meta["error"]>) => ({
      ...state,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: initialState.error,
    }),
    authorizedOn: (state) => ({
      ...state,
      isAuthorized: true,
    }),
    authorizedOff: (state) => ({
      ...state,
      isAuthorized: false,
    }),
  },
});

export default meta.reducer;

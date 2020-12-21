import {configureStore} from '@reduxjs/toolkit';
import userReducer from './state/ducks/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export type Store = ReturnType<typeof store.getState>;

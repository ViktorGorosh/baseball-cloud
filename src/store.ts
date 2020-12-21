import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './state/sagas';
import userReducer from './state/ducks/user';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware().concat(sagaMiddleware),
});

export default store;

export type Store = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

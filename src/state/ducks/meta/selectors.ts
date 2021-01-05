import {Store} from 'store';

export const selectError = (state: Store) => state.meta.error;
export const selectLoading = (state: Store) => state.meta.isLoading;
export const selectAuthorized = (state: Store) => state.meta.isAuthorized;

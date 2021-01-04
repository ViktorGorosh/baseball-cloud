import {Store} from 'store';

export const selectError = (state: Store) => state.meta.error;
export const selectLoading = (state: Store) => state.meta.isLoading;

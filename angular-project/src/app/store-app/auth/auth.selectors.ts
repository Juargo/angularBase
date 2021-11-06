import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReduce from './auth.reducers';

export const selectAuth = createFeatureSelector<authReduce.StateAuth>(
    authReduce.authFeaturekey
  );

  export const getLogin = createSelector(
    selectAuth,
    (state: authReduce.StateAuth) => state.login
  );
  
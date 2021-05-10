/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { BaseAction } from 'redux/types';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  AuthState,
  USER_CHECK_SUCCESS,
  USER_CHECK_ERROR,
} from './types';

export const initialState = {
  success: null,
  is_admin: false,
  profile: null,
  user: null,
  pending: false,
  fetchTime: null,
  error: null,
};

const myReducer = (state: AuthState = initialState, action: BaseAction) =>
  produce(state, (draft: Draft<AuthState>) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN:
        draft.pending = true;
        draft.error = null;
        draft.success = null;
        break;
      case USER_LOGIN_SUCCESS:
      case USER_CHECK_SUCCESS:
        const { profile, user } = payload?.data;
        draft.profile = profile;
        draft.user = user;
        draft.success = true;
        draft.pending = false;
        draft.error = null;
        break;
      case USER_LOGIN_ERROR:
      case USER_CHECK_ERROR:
        draft.pending = false;
        draft.success = false;
        draft.error = action.error || 'Please check with your administrator.';
        break;
      default:
    }
  });

export default myReducer;

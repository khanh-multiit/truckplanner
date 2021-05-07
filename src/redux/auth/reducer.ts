/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { BaseAction } from 'redux/types';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, AuthState } from './types';

export const initialState = {
  success: false,
  is_admin: false,
  profile: null,
  user: null,
  pending: false,
  fetchTime: null,
};

const myReducer = (state: AuthState = initialState, action: BaseAction) =>
  produce(state, (draft: Draft<AuthState>) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN:
        draft.pending = true;
        break;
      case USER_LOGIN_SUCCESS:
        draft.profile = payload?.data?.profile;
        draft.user = payload?.data?.user;
        draft.success = true;
        draft.pending = false;
        break;
      case USER_LOGIN_ERROR:
        draft.pending = false;
        draft.success = false;
        break;
      default:
    }
  });

export default myReducer;

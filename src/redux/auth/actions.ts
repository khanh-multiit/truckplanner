/*
 * App Global Actions
 */

import { BaseAction } from 'redux/types';
import { LoginPayloadProps, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_CHECK } from './types';

export const userLogin = (payload: LoginPayloadProps, redirect: string): BaseAction => ({
  type: USER_LOGIN,
  payload,
  meta: {
    redirect,
    success: USER_LOGIN_SUCCESS,
    failure: USER_LOGIN_ERROR,
  },
});

export const userCheck = (payload: {}, redirect: string): BaseAction => ({
  type: USER_CHECK,
  payload,
  meta: {
    redirect,
  },
});

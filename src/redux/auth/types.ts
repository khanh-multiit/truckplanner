/*
 * Apptypes
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * types here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

const scope = 'multi-it';

export const USER_LOGIN = `${scope}/USER_LOGIN`;
export const USER_LOGIN_ERROR = `${scope}/USER_LOGIN_ERROR`;
export const USER_LOGIN_SUCCESS = `${scope}/USER_LOGIN_SUCCESS`;

export const USER_CHECK = `${scope}/USER_CHECK`;

export const USER_LOAD = `${scope}/USER_LOAD`;
export const USER_LOAD_SUCCESS = `${scope}/USER_LOAD_SUCCESS`;
export const USER_LOAD_FAILURE = `${scope}/USER_LOAD_FAILURE`;
export const USER_LOAD_CANCELLED = `${scope}/USER_LOAD_CANCELLED`;

export const USER_LOGOUT = `${scope}/USER_LOGOUT`;
export const USER_LOGOUT_SUCCESS = `${scope}/USER_LOGOUT_SUCCESS`;
export const USER_LOGOUT_FAILURE = `${scope}/USER_LOGOUT_FAILURE`;

export type AuthProfileState = {
  id: number;
  [x: string]: any;
};

export type AuthUserState = {
  id: number;
  [x: string]: any;
};

export type AuthState = {
  success: boolean;
  is_admin: boolean;
  profile: AuthProfileState | null;
  user: AuthUserState | null;
  pending: boolean;
  fetchTime: null | number;
};

export interface LoginPayloadProps {
  email: string;
  password: string;
}

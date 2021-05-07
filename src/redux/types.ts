import { AuthState } from './auth/types';

export interface BaseAction {
  type: string;
  payload?: any;
  meta: {
    success?: string;
    failure?: string;
    cancel?: string;
    redirect?: string;
  };
  error?: string;
}

export interface State {
  auth: AuthState;
}

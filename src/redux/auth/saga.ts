import { call, put, takeLatest } from 'redux-saga/effects';
import authProvider from 'utils/auth-provider';
import { push } from 'connected-react-router';
import { BaseAction } from 'redux/types';
import { USER_LOGIN } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* userLogin(action: BaseAction) {
  const { payload, meta } = action;
  const { success, failure, redirect } = meta;
  try {
    const resp: ResponseGenerator = yield call(authProvider.login, payload);
    yield put({ meta, type: success, payload: resp });
    yield put(push(redirect || '/'));
  } catch (error) {
    yield put({ meta, type: failure, error: error.message });
  }
}

function* authSaga() {
  yield takeLatest(USER_LOGIN, userLogin);
}

export default authSaga;

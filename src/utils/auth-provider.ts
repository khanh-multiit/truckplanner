/* eslint-disable @typescript-eslint/naming-convention */
import httpClient from './request';

const apiUrl = '/api';
const tokenKey = 'multi-it.token';
const tokenUser = 'multi-it.user';
const tokenProfile = 'multi-it.profile';

interface LoginData {
  token: string;
  expire: string;
  refresh_token: string;
}

const login = (payload: any): Promise<LoginData> => {
  const reqOpts = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  return httpClient(`${apiUrl}/accountsession/login`, reqOpts).then(
    (resp: any): Promise<any> => {
      try {
        const { user = {}, profile = {} } = resp?.data;
        setToken(user, profile);
        return Promise.resolve(resp);
      } catch (error) {
        return Promise.reject(error.message);
      }
    },
  );
};

const getToken = () => {
  if (localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey) || '{}');
  }
  return false;
};

const getLocalProfile = () => {
  if (localStorage.getItem(tokenProfile)) {
    return JSON.parse(localStorage.getItem(tokenProfile) || '{}');
  }
  return false;
};

const getLocalUser = () => {
  if (localStorage.getItem(tokenUser)) {
    return JSON.parse(localStorage.getItem(tokenUser) || '{}');
  }
  return false;
};

const setToken = (user: any, profile: any) => {
  if (user && profile) {
    const { token, ...rest } = user;
    localStorage.setItem(tokenKey, JSON.stringify(token));
    localStorage.setItem(tokenUser, JSON.stringify(rest));
    localStorage.setItem(tokenProfile, JSON.stringify(profile));
    return token;
  }
  return false;
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(tokenUser);
  localStorage.removeItem(tokenProfile);
};

const authProvider = { login, getToken, getLocalProfile, getLocalUser, removeToken };
export default authProvider;

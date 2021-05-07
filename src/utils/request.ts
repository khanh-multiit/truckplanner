// eslint-disable-next-line import/no-cycle

const tokenKey = 'tvs.token';

export const baseURL = process.env.REACT_APP_API_URL || '';
export const basePath = process.env.REACT_APP_API_PREFIX || '';

export const apiURI = baseURL + basePath;

type OptionsProp = {
  headers?: Headers;
  body?: any;
  method: string;
};

class HttpError extends Error {
  status: number;

  constructor(message: any, status: number, body = null) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
    this.stack = new Error().stack;
  }
}

async function http<T>(url: string, options: OptionsProp): Promise<T> {
  if (!url) {
    return Promise.reject(new Error('url is required!'));
  }

  let requestURI = url;

  if (!url.startsWith('http') && !url.startsWith('//')) {
    if (url.startsWith('/')) {
      requestURI = baseURL + url;
    } else {
      requestURI = `${apiURI}/${url}`;
    }
  }
  const requestHeaders: HeadersInit = options.headers || new Headers();

  if (!requestHeaders.has('Accept')) {
    requestHeaders.set('Accept', 'application/json');
  }
  if (!requestHeaders.has('Content-Type') && !(options.body && options.body instanceof FormData)) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  const token = await localStorage.getItem(tokenKey);

  if (token) requestHeaders.set('Authorization', `Bearer ${JSON.parse(token)}`);

  const response = await fetch(requestURI, {
    method: options.method,
    headers: requestHeaders,
    body: options.body,
  });

  const responseText = await response.text();
  const { status, statusText } = await response;

  let json: any = {
    message: '',
  };
  if (responseText) {
    json = JSON.parse(responseText);
  }

  if (status < 200 || status >= 300) {
    const message = json?.message || statusText || 'errror';
    return Promise.reject(new HttpError(message, status, json));
  }

  return Promise.resolve(json);
}

export default http;

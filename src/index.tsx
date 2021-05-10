import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
// import history from 'utils/history';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import './polyfills';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

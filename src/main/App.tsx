import 'devextreme/dist/css/dx.common.css';
import 'themes/generated/theme.base.css';
import 'themes/generated/theme.additional.css';
import 'themes/generated/dx-styles.scss';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AnonTemplate } from 'themes';
import { useSelector } from 'react-redux';
import { State } from 'redux/types';
import Async from './Async';
import router from './app-routes';

const App = () => {
  const availabelRoutes = router;

  const { auth } = useSelector((state: State) => state);

  const routeRenderer = (Layout: any, pageComponent: string, noAuth = false) => {
    const isLogin: any = auth;
    // to-do
    if (!noAuth && !isLogin?.success && window.location.pathname !== '/login') {
      window.location.replace('/login');
    }

    return (
      <Layout>
        <Async page={pageComponent} />
      </Layout>
    );
  };

  const routeListRedenrer = () => {
    return availabelRoutes.map(({ noAuth, path, pageComponent, layout, isExact = false }, index) => {
      const template = layout || AnonTemplate;
      return (
        <Route
          key={`${pageComponent}-root`}
          path={path}
          exact={isExact}
          render={() => routeRenderer(template, pageComponent, noAuth)}
        />
      );
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{routeListRedenrer()}</Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

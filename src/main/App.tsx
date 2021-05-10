/* eslint-disable react-hooks/exhaustive-deps */
import 'devextreme/dist/css/dx.common.css';
import 'themes/generated/theme.base.css';
import 'themes/generated/theme.additional.css';

import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import 'themes/generated/dx-styles.scss';
import { AnonTemplate } from 'themes';
import router from './app-routes';
import { useScreenSizeClass } from 'utils/media-query';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from 'redux/auth/actions';
import { State } from 'redux/types';

const App = () => {
  const dispatch = useDispatch();
  const screenSizeClass = useScreenSizeClass();
  const availabelRoutes = router;
  const { auth } = useSelector((state: State) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(userCheck('/'));
  }, []);

  const routeRenderer = (Layout: any, pageComponent: string, noAuth = false) => {
    if (!noAuth && (!auth?.user || !auth?.profile)) {
      history.push('/login');
    }
    const AysncCpomponent = lazy(() => import(`pages/${pageComponent}`));
    return (
      <Layout>
        <Suspense fallback={<div>Loading</div>}>
          <AysncCpomponent />
        </Suspense>
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
    <div className={`app ${screenSizeClass}`}>
      <Switch>{routeListRedenrer()}</Switch>
    </div>
  );
};

export default App;

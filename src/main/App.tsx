import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AnonTemplate } from 'themes';
import { useDispatch } from 'react-redux';
import { userCheck } from 'redux/auth/actions';
import Async from './Async';
import router from './app-routes';

const App = () => {
  const availabelRoutes = router;
  const dispatch = useDispatch();

  const routeRenderer = (Layout: any, pageComponent: string, noAuth = false) => {
    if (!noAuth) {
      dispatch(userCheck({}, '/login'));
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
      <Switch>{routeListRedenrer()}</Switch>
    </div>
  );
};

export default withRouter(App);

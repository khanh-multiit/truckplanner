import 'devextreme/dist/css/dx.common.css';
import '../themes/generated/theme.base.css';
import '../themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import 'dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from '../contexts/navigation';
import { AuthProvider, useAuth } from '../contexts/auth';
import { useScreenSizeClass } from '../utils/media-query';

import { Switch, Route, Redirect } from 'react-router-dom';
import appInfo from 'app/app-info';
import routes from 'app/app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from 'layouts';
import { Footer } from 'components';

import UnauthenticatedContent from '../UnauthenticatedContent';

function Async() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return (
      <SideNavBarLayout title={appInfo.title}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact key={path} path={path} component={component} />
          ))}
          <Redirect to={'/home'} />
        </Switch>
        <Footer>
          Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
          <br />
          All trademarks or registered trademarks are property of their respective owners.
        </Footer>
      </SideNavBarLayout>
    );
  }

  return <UnauthenticatedContent />;
}

const App = () => {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <Async />
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

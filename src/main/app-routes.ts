import { FC } from 'react';
import { AuthTemplate } from 'themes';

interface IRouterPattern {
  path: string;
  noAuth?: boolean;
  pageComponent: string;
  isExact?: boolean;
  layout?: any;
}

const routes: IRouterPattern[] = [
  {
    path: '/login',
    noAuth: true,
    pageComponent: 'Login',
  },
  {
    path: '/',
    layout: AuthTemplate,
    pageComponent: 'Dashboard',
  },
];

export default routes;

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
    path: '/recovery/reset-password',
    noAuth: true,
    isExact: true,
    pageComponent: 'login/forgotPassword',
  },
  {
    path: '/login',
    noAuth: true,
    pageComponent: 'login/login',
  },
  {
    path: '/',
    layout: AuthTemplate,
    pageComponent: 'home/home',
  },
];

export default routes;

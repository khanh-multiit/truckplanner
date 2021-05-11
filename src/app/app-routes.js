import { withNavigationWatcher } from 'contexts/navigation';
import { HomePage, TasksPage, ProfilePage, OrdersPage } from 'pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/orders',
    component: OrdersPage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});

import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';

const routes = createHashRouter([
  {
    path: '/',
    Component: lazy(() => import('../src/pages/index/index')),
  },
  {
    path: '/about',
    Component: lazy(() => import('../src/pages/about/about')),
  },
]);
export default routes;

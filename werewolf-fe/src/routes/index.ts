import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/home',
    exact: true,
    element: loadable(() => import('@/pages/Home')),
  },
  {
    path: '/join',
    exact: true,
    element: loadable(() => import('@/pages/Join')),
  },
  {
    path: '/create',
    exact: true,
    element: loadable(() => import('@/pages/Create')),
  },
]

export default routesConfig

import { asyncComponent } from '@router'

export const routes = [
    {
        path: '/login',
        name: 'login',
        exact: true,
        component: asyncComponent(() => import('@/base/pages/login'))
    },
    {
        path: '/admin',
        name: 'admin',
        component: asyncComponent(() => import('@/base/pages/admin'))
    },
    {
        path: '/404',
        name: '404',
        component: asyncComponent(() => import('@/base/pages/404'))
    }
]
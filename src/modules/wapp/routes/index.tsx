import { asyncComponent } from '@router'
export default [
    {
        path: '/wapp',
        component: asyncComponent(() => import('../index')),
        routes: [
            {
                path: '/wapp/goods',
                component: asyncComponent(() => import('../pages/goods'))
            },
            {
                path: '/wapp/orders',
                component: asyncComponent(() => import('../pages/orders'))
            },
            {
                path: '/wapp/types',
                component: asyncComponent(() => import('../pages/types'))
            }
        ]
    }
]
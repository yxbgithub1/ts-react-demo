import { asyncComponent } from '@router'
export default [
    {
        path: '/admin/wapp/goods',
        component: asyncComponent(() => import('../pages/goods'))
    },
    {
        path: '/admin/wapp/orders',
        component: asyncComponent(() => import('../pages/orders'))
    },
    {
        path: '/admin/wapp/types',
        component: asyncComponent(() => import('../pages/types'))
    }
]
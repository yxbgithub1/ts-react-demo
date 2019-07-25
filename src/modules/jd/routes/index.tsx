import { asyncComponent } from '@router'
export default [
    {
        path: '/admin/jd/goods',
        component: asyncComponent(() => import('../pages/goods'))
    },
    {
        path: '/admin/jd/orders',
        component: asyncComponent(() => import('../pages/orders'))
    },
    {
        path: '/admin/jd/types',
        component: asyncComponent(() => import('../pages/types'))
    }
]
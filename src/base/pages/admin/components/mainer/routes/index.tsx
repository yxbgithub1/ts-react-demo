import { asyncComponent } from '@router'

export const routes = [
    {
        path: '/admin/wapp',
        name: 'wapp',
        exact: true,
        component: asyncComponent(() => import('@/base/pages/admin/components/mainer/pages/wapp'))
    },
    {
        path: '/admin/website',
        name: 'website',
        component: asyncComponent(() => import('@/base/pages/admin/components/mainer/pages/website'))
    },
    {
        path: '/admin/wx',
        name: 'wx',
        component: asyncComponent(() => import('@/base/pages/admin/components/mainer/pages/wx'))
    }
]
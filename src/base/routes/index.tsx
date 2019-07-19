import { readerRoutes, asyncComponent } from '@router'
// @ts-ignore
// 动态读取子模块的路由
export const children = readerRoutes(require.context('@/modules', true, /routes\/index\.tsx$/))
export const routes = [
    {
        path: '/admin',
        component: asyncComponent(() => import('@/base/pages/admin')),
        routes: [
            ...children
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: asyncComponent(() => import('@/base/pages/login'))
    },
    {
        path: '/404',
        name: '404',
        component: asyncComponent(() => import('@/base/pages/404'))
    }
]

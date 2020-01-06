import menus from './menus'
import * as roles from './roles'
import { extractSiders, extractRoutes } from './export'
import { readerRoutes, asyncComponent } from '@/router'

const ROLE = 'role4'
const siders = extractSiders(menus, roles[ROLE])
const appearRoutes = extractRoutes(siders)
// console.log(siders, '提取拥有权限的菜单')
// console.log(appearRoutes, '提取拥有权限的路由')

/*webpack动态读取子模块的路由*/
// @ts-ignore
const children = readerRoutes(require.context('@/modules', true, /routes\/index\.tsx$/))
const routes = [
    {
        path: '/admin',
        component: asyncComponent(() => import('@/base/pages/admin')),
        routes: [
            {
                path: '/admin/home',
                component: asyncComponent(() => import('@/base/pages/admin/home')),
            },
            ...children,
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: asyncComponent(() => import('@/base/pages/login')),
    },
    {
        path: '/404',
        name: '404',
        component: asyncComponent(() => import('@/base/pages/404')),
    },
]

export { menus, routes, siders, appearRoutes }

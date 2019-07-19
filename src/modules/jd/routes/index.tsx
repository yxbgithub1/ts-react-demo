import { asyncComponent } from '@router'
// export default [
//     {
//         path: '/jd',
//         component: asyncComponent(() => import('../index')),
//         routes: [
//             {
//                 path: '/jd/goods',
//                 component: asyncComponent(() => import('../pages/goods'))
//             },
//             {
//                 path: '/jd/orders',
//                 component: asyncComponent(() => import('../pages/orders'))
//             },
//             {
//                 path: '/jd/types',
//                 component: asyncComponent(() => import('../pages/types'))
//             }
//         ]
//     }
// ]
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
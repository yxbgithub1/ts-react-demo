// const ROOT_PATH = '/admin/'
export default [
    {
        id: '1',
        name: '首页',
        path: '/admin/home',
        icon: 'team',
    },
    {
        id: '2',
        name: '京东兑换',
        icon: 'pie-chart',
        children: [
            {
                id: '2-1',
                name: '商品管理',
                path: '/admin/jd/goods',
                // children: [
                //     {
                //         id: '1-1-1',
                //         name: '商品上架',
                //         path: 'jd/goods/add',
                //         component: 1
                //     },
                //     {
                //         id: '1-1-2',
                //         name: '商品下架',
                //         path: 'jd/goods/remove',
                //         component: 2
                //     },
                // ]
            },
            {
                id: '2-2',
                name: '分类管理',
                path: '/admin/jd/orders',
            },
            {
                id: '2-3',
                name: '订单管理',
                path: '/admin/jd/types',
            }
        ]
    },
    {
        id: '3',
        name: '官网后台',
        icon: 'desktop',
        children: [
            {
                id: '3-1',
                name: '新闻管理',
                path: '/admin/wapp/goods',
            },
            {
                id: '3-2',
                name: '视频管理',
                path: '/admin/wapp/orders',
            },
            {
                id: '3-3',
                name: '视频管理',
                path: '/admin/wapp/types',
            }
        ]
    },
]
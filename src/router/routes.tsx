import React from 'react'
/**
 * 异步路由
 * @param importComponent 
 */
function asyncComponent(importComponent: { (): Promise<any>; (): void; }) {
    return class AsyncComponent extends React.Component<{}, { component: any }> {
        constructor(props: any) {
            super(props)
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent()
            this.setState({ component })
        }

        render() {
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }
}


export default [
    {
        path: '/card',
        name: 'card',
        exact: true,
        component: asyncComponent(() => import('../containers/card/card'))
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: asyncComponent(() => import('../containers/swiper/swiper'))
    },
    {
        path: '/login',
        name: 'login',
        component: asyncComponent(() => import('../containers/login/login'))
    },
    {
        path: '/cropper',
        name: 'cropper',
        component: asyncComponent(() => import('../containers/cropper/cropper'))
    },
    {
        path: '/home',
        name: 'home',
        component: asyncComponent(() => import('../containers/home/home'))
    },
    {
        path: '/404',
        name: '404',
        component: asyncComponent(() => import('../containers/layout/404'))
    }
]
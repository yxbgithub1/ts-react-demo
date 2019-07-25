import React, { Fragment } from 'react'
import Base from '@/base'
// import { Storage } from '@utils'
import { appearRoutes } from '@/base/routes'
import { Redirect, withRouter } from 'react-router-dom'
// const HISTORY_ROUTER = 'historyRouter'
export default withRouter(class extends Base {

    componentDidMount() {
        this.routerCheck()
    }

    componentWillReceiveProps() {
        this.routerCheck()
    }

    routerCheck = () => {
        const { location: { pathname } } = this.props
        const result = appearRoutes.some((item: any) => item.path === pathname)
        // 访问不存在路由时跳转回上一个路由
        if (!result) this.$route.back()
    }

    render() {
        const { location: { pathname } } = this.props
        console.log(pathname)
        // 未登录访问登录路由时跳转至登录界面
        if (!this.$token) {
            // 未登陆
            if (pathname !== '/login') {
                return <Redirect to={'/login'} />
            }
        } else {
            // 已登陆访问登陆页面
            // if (pathname === '/login') {
            //     return <Redirect to={'/admin'} />
            // }
        }
        return (
            <Fragment>{this.props.children}</Fragment>
        )
    }
})
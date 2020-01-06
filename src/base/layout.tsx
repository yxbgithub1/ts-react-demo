import React, { Fragment } from 'react'
import Base from '@/base'
import { Redirect, withRouter } from 'react-router-dom'

export default withRouter(
    class extends Base {
        render() {
            const {
                location: { pathname },
            } = this.props
            console.log(pathname)
            // 未登录访问登录路由时跳转至登录界面
            if (!this.$token) {
                // 未登陆
                if (pathname !== '/login') {
                    return <Redirect to={'/login'} />
                }
            } else {
                // 已登陆访问登陆页面
                if (pathname === '/login') {
                    return <Redirect to={'/admin'} />
                }
            }
            return <Fragment>{this.props.children}</Fragment>
        }
    },
)

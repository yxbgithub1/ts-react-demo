import React from 'react'
import { Base } from '@containers/base'
import { Page } from '@components'
import { Redirect, withRouter } from 'react-router-dom'

class LayoutContainer extends Base {
    render() {
        const path = this.props.location.pathname
        if (!this.token) {
            // 未登陆
            if (path !== '/login') {
                return <Redirect to={{ pathname: '/login' }} />
            }
        } else {
            // 已登陆访问登陆页面
            if (path === '/login') {
                return <Redirect to={{ pathname: '/home' }} />
            }
        }

        return (
            <Page>
                {/* 其他公共组件 */}
                {this.props.children}
            </Page>
        )
    }
}

const Layout = withRouter(LayoutContainer)

export {
    Layout
}
import React from 'react'
import { Base } from '@containers'
import { Page } from '@components'
import { withRouter } from 'react-router-dom'

class LayoutContainer extends Base<{ location?: any }> {
    render() {
        //Redirect,
        // const path = this.props.location.pathname
        // if (!this.token) {
        //     // 未登陆
        //     if (path !== '/login') {
        //         return <Redirect to={{ pathname: '/login' }} />
        //     }
        // } else {
        //     // 已登陆访问登陆页面
        //     if (path === '/login') {
        //         return <Redirect to={{ pathname: '/home' }} />
        //     }
        // }

        return (
            <Page>
                {/* <Alert /> */}
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
import React, { Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { Header, Mainer, Footer } from '@/base/components'

import Base from '@/base'
import { Props } from './@type'
class Layout extends Base<Props> {
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
            <Fragment>
                {/* 全局公共组件 */}

                {/* 全局头部 */}
                <Header />

                {/* 全局容器 */}
                <Mainer >
                    { this.props.children }
                </Mainer>

                {/* 全局脚部 */}
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(Layout)
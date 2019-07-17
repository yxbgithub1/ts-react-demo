import React from 'react'
import Base from '@/base'
import { Redirect, withRouter } from 'react-router-dom'

export default withRouter(class extends Base {
    render() {
        const path = this.props.location.pathname
        if (!this.token) {
            // 未登陆
            if (path !== '/login') {
                return <Redirect to={{ pathname: '/login' }} />
            }
        } else {
            console.log(path)
            // 已登陆访问登陆页面
            if (path === '/login') {
                return <Redirect to={{ pathname: '/admin' }} />
            }
        }
        return (
            <div>{ this.props.children }</div>
        )
    }
})
import React from 'react'
import Base from '@/base'
import { Layout } from 'antd'
import { Storage } from '@utils'
import { Link } from 'react-router-dom'
import { Routers } from '@components'
export class Mainer extends Base {
    logout = () => {
        Storage.remove('token')
        this.$route.replace('/login')
    }
    render() {
        const { match, routes } = this.props

        return (
            <Layout.Content style={{ padding: '20px' }}>
                <h1>主体内容</h1>
                <button onClick={this.logout}>退出登陆</button>
                <p>
                    <Link to="/admin/jd/goods">
                        <button>外部APP</button>
                    </Link>
                    <Link to="/admin/jd/orders">
                        <button>官网</button>
                    </Link>
                    <Link to="/admin/jd/types">
                        <button>wx</button>
                    </Link>
                </p>
                <Routers routes={routes} redirect={`${match.url}/home`} />
            </Layout.Content>
        )
    }
}

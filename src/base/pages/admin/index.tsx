import React, { Fragment } from 'react'
import Base from '@/base'
import { Header, Mainer, Footer, Sidebar } from '@/base/components'
import { Layout } from 'antd';

export default class Admin extends Base {
    componentDidMount() {
        // console.log(this.token, '当前token')
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh', }}>
                <Sidebar {...this.props} />
                <Layout>
                    <Header />
                    <Mainer {...this.props} />
                    <Footer />
                </Layout>
                <Fragment>
                    {/* 全局公共组件 */}
                </Fragment>
            </Layout>
        )
    }
}
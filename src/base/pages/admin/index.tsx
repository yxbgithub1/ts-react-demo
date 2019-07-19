import React, { Fragment } from 'react'
import Base from '@/base'
import { Header, Mainer, Footer } from './components'

export default class Admin extends Base {
    componentDidMount(){
        // console.log(this.token, '当前token')
    }
    render() {
        return (
            <Fragment>
                {/* 全局公共组件 */}

                {/* 全局头部 */}
                <Header />

                {/* 全局容器 */}
                <Mainer {...this.props}>
                    { this.props.children }
                </Mainer>

                {/* 全局脚部 */}
                <Footer />
            </Fragment>
        )
    }
}
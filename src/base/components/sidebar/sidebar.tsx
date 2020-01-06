import React from 'react'
import './style.scss'
import Base from '@/base'
import { siders } from '@/base/routes'
import { Layout, Menu } from 'antd'
import { SidebarMenu } from './sidebar-menu'

export class Sidebar extends Base {
    rootSubmenuKeys = ['1', '2', '3']

    state = {
        openKeys: ['1'],
    }

    /** 选中菜单跳转路由 */
    onSelect = ({ item }: any) => {
        const path = item.props['data-path']
        this.$route.push(path)
    }

    /** 点击菜单，收起其他展开的所有菜单 */
    onOpenChange = (openKeys: any) => {
        const latestOpenKey = openKeys.find((key: any) => !~this.state.openKeys.indexOf(key))
        if (!~this.rootSubmenuKeys.indexOf(latestOpenKey)) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            })
        }
    }

    render() {
        return (
            <Layout.Sider>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    openKeys={this.state.openKeys}
                    onSelect={this.onSelect}
                    onOpenChange={this.onOpenChange}>
                    {SidebarMenu(siders)}
                </Menu>
            </Layout.Sider>
        )
    }
}

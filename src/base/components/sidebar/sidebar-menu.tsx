import React from 'react'
import { Menu, Icon } from 'antd';
const { Item, SubMenu } = Menu
const SidebarMenu = (siders: any) => (
    siders.map((item: any) => (
        !item.children ?
            <Item
                key={item.id}
                data-path={item.path} >
                {item.icon ? <Icon type={item.icon} /> : null}
                <span>{item.name}</span>
            </Item> :
            <SubMenu
                key={item.id}
                data-path={item.path}
                title={
                    item.icon ?
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span> :
                        <span>{item.name}</span>
                }>
                {SidebarMenu(item.children)}
            </SubMenu>
    ))
)
export {
    SidebarMenu
}
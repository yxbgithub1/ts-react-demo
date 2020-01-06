import React from 'react'
import { Storage } from '@utils'
import { PropsType, RouterEvent } from './@type'

export default class Base<P = {}, S = {}> extends React.PureComponent<PropsType> {
    /**
     * go        前进/后退 (n)
     * goBack    后退一页
     * goForward 前进一页
     * push      新增一条历史记录 (path, state)
     * replace   替换当前历史记录 (path, state)
     * @type {*}
     * @memberof Base
     */
    history: any
    constructor(props: any) {
        super(props)
        this.history = props.history
    }

    /** 路由事件-Base基类 */
    $route: RouterEvent = {
        back: () => this.history.goBack(),
        forward: () => this.history.goForward(),
        go: (step: number) => this.history.go(step),
        push: (path: any) => this.history.push(path),
        replace: (path: any) => this.history.push(path),
    }

    /** 登陆token */
    get $token() {
        return Storage.get('token')
    }
}

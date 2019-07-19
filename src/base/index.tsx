import React from 'react'
import { Storage } from '@utils'
import { RouteComponentProps } from 'react-router-dom'

type PathParamsType = {
    // type whatever you expect in the this.props.match.params.*
}
type PropsType = RouteComponentProps<PathParamsType> & {
    history?: any,
    routes?: any
    // your props here
}
type RouterEvent = {
    go:(step: number) => void
    push: (path: string) => void,
    back:() => void
}

export default class Base<P={}, S={}> extends React.Component<PropsType> {
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
    constructor(props: any){
        super(props)
        this.history = props.history
    }
    back = () => this.props.history.back()
    push = (path: any) =>this.props.history.push(path)

    // route: RouterEvent = {
    //     push: (path: any) => {
    //         this.props.history.push(path)
    //     }
    // }
    // router: RouterEvent = {
    //     go:(step: number = 1) => this.history.go(step),
    //     push:(path: any) =>this.history.push(path)
    // }

    /** 登陆token */
    get token() {
        return Storage.get('token')
    }
}

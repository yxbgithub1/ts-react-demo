import React from 'react'
import DB from '@utils'
import { RouteComponentProps } from 'react-router-dom'
type PathParamsType = {
    // type whatever you expect in the this.props.match.params.*
}

type PropsType = RouteComponentProps<PathParamsType> & {
    history?: any
    // your props here
}

class Base<P={}, S={}> extends React.Component<PropsType> {

    routerGo(url: string) {
        this.props.history.push(url)
    }

    routerPush() { }

    routerBack() { }

    get token() {
        return DB.get('token')
    }

    /**
     * 设置当前页面标题
     * @param title 
     */
    setDocTitle(title: string) {
        document.title = title
    }
}

export {
    Base
}
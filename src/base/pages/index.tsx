import React from 'react'
import { Storage } from '@utils'
import { RouteComponentProps } from 'react-router-dom'

type PathParamsType = {
    // type whatever you expect in the this.props.match.params.*
}
type PropsType = RouteComponentProps<PathParamsType> & {
    history?: any
    // your props here
}

export default class Base<P={}, S={}> extends React.Component<PropsType> {
    /** 登陆token */
    get token() {
        return Storage.get('token')
    }
}



import React from 'react'
import DB from '@utils'

class Base<P={}, S={}> extends React.Component<{ history?: any }> {
    routerGo(url: string) {
        this.props.history.push(url)
    }

    routerPush() { }

    routerBack() { }

    get token() {
        return DB.get('token')
    }
}

export {
    Base
}
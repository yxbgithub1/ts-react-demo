import React from 'react'

export default class Base<P={}, S={}> extends React.Component<{ history?: any }> {

    routerGo(url: string) {
        this.props.history.push(url)
    }

    routerPush() { }

    routerBack() { }
}
import React, { Component } from 'react'
import { Props } from './type'
import './style.scss'

class Transition extends Component<Props, {}> {
    render() {
        const { className } = this.props
        return (
            <div className={`transition ${className}`}>
                {this.props.children || null}
            </div>
        )
    }
}

export {
    Transition
}
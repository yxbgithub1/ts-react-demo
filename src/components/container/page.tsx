import React, { Component } from 'react'
import './style.scss'

class Page extends Component {
    render() {
        return (
            <div className='page'>
                {this.props.children}
            </div>
        )
    }
}

export {
    Page
}
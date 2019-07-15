import React from 'react'
import './style.scss'

interface IProps {
    type: string,
    className?: string,
    onClick?: () => void
}

class IconFont extends React.PureComponent<IProps> {
    render() {
        return (
            <svg
                onClick={this.props.onClick}
                className={`iconfont ${this.props.className}`}
                aria-hidden='true'>
                <use xlinkHref={`#${this.props.type}`}></use>
            </svg>
        )
    }
}

export {
    IconFont
}
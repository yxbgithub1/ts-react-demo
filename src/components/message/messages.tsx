import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'
import { MessageProps } from './type'

const doc = document
const defaultProps: MessageProps = {
    type: 'info',
    duration: 3000,
    message: '默认提示内容'
}

function Message(props?: MessageProps | string) {
    const message = doc.getElementsByClassName('message')[0]
    // 阻止频繁渲染
    if (message) return

    const div = doc.createElement('div')
    div.className = 'message'
    doc.body.appendChild(div)

    // 允许只传递提示文本字符串
    if (typeof props === 'string') {
        props = {
            message: props
        }
    }

    props = {
        ...defaultProps,
        node: div,
        ...props,
    }

    ReactDOM.render(<Modal {...props} />, div)
}

export {
    Message
}
import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'
import './style.scss'
import { MessageType, MessageProps, ToastProps } from './type'

// 默认参数
const DefaultProps: ToastProps = {
    type: 'info',
    duration: 3000,
    message: '默认提示内容'
}

function Message(props: MessageProps | string, type?: MessageType) {
    const doc = document

    const div = doc.createElement('div')
    const messageBox = doc.getElementsByClassName('message-content')[0]

    if (messageBox) {
        messageBox.appendChild(div)
        doc.body.appendChild(messageBox)
    } else {
        const messageBox = doc.createElement('div')
        messageBox.className = 'message-content'
        messageBox.appendChild(div)
        doc.body.appendChild(messageBox)
    }

    // 允许只传递提示文本字符串
    if (typeof props === 'string') {
        props = {
            message: props
        }
    }

    props = {
        ...DefaultProps,
        willUnmount: () => {
            const messageBox = document.getElementsByClassName('message-content')[0]
            ReactDOM.unmountComponentAtNode(div)
            messageBox.removeChild(div);

            if (typeof props !== 'string' && props.onClose instanceof Function) {
                props.onClose();
            }
        },
        ...props,
    }

    const component = React.createElement(Toast, props)
    ReactDOM.render(component, div)
}

export {
    Message,
}
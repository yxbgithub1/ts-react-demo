import React from 'react'
import './style.scss'
import ReactDOM from 'react-dom'
import { IconFont, Transition } from '@components'
import { ModalProps, ModalState } from './type'

export default class Modal extends React.PureComponent<ModalProps, ModalState> {
    timeout: any

    constructor(props: Readonly<ModalProps>) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.show()
    }

    componentWillUpdate(props: any, nextProps: any) {
        console.log(1, props)
        console.log(2, nextProps)
    }

    componentWillReceiveProps(props: any, nextProps: any) {
        console.log(1, props)
        console.log(2, nextProps)
    }

    show = () => {
        this.setState({
            visible: true
        }, () => this.hide())
    }

    hide = () => {
        this.clearTimer()
        this.timeout = setTimeout(() => {
            this.setState({ visible: false })
            // this.unmountComponent()
        }, this.props.duration)

        // this.timeout = setTimeout(() => this.unmountComponent(), this.props.duration);
    }

    /** 组件卸载 && 删除节点 **/
    unmountComponent = () => {
        ReactDOM.unmountComponentAtNode(this.props.node)
        this.props.node.remove()
    }

    /** 清除定时器 **/
    clearTimer = () => {
        clearTimeout(this.timeout)
    }

    render() {
        const { type, message } = this.props
        return (
            <Transition className={this.state.visible ? 'fadeIn' : 'fadeOut'}>
                <div className='message-inner flex border radius5'>
                    <div className={`flex-item ${type}`}>
                        <IconFont
                            className='icon'
                            type={`icon${type}`} />
                    </div>
                    <div className='flex-item message-content'>
                        {message}
                    </div>
                </div>
            </Transition>
        )
    }
}
import React from 'react'
import './style.scss'
import { ToastProps, ToastState } from './type'

export default class Toast extends React.PureComponent<ToastProps, ToastState> {
    state: ToastState
    timeout: any

    constructor(props: Readonly<ToastProps>) {
        super(props)
        this.timeout = null
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.setState({
            visible: true
        }, () => this.startTimer())
    }

    onClose() {
        this.clearTime()
        this.setState({
            visible: false
        })
    }

    startTimer = () => {
        this.timeout = setTimeout(() => {
            this.props.willUnmount && this.props.willUnmount()
            // this.onClose()
        }, this.props.duration)
    }

    clearTime = () => {
        clearTimeout(this.timeout)
    }

    render() {
        // const { type, message } = this.props
        console.log(this.props)
        return (
            <div className='message'
                style={{ display: this.state.visible ? 'flex' : 'none' }}>
                {/* {{ message }} */}
                111
            </div>
        )
    }
}
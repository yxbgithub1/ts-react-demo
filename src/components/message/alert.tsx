import React from 'react'
import ReactDOM from 'react-dom'


interface AlertProps {
    node?: any
}
interface AlertState {
    visible: boolean
}

class Alert extends React.PureComponent<AlertProps, AlertState> {
    state: AlertState = {
        visible: false
    }

    componentDidMount() {
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                this.willUnmount()
                this.setState({
                    visible: false
                })
            }, 3000)
        })
    }

    willUnmount() {
        ReactDOM.unmountComponentAtNode(this.props.node)
        this.props.node.remove()
    }

    render() {
        const { visible } = this.state
        // console.log(visible)
        return (
            <div
                className='message'
                style={{ display: visible ? 'flex' : 'none' }} >
                自定义弹窗
            </div>
        )
    }
}

function Portal(props: any) {
    const div = document.createElement('div')
    div.className = 'alert'
    document.body.appendChild(div)

    props = {
        node: div
    }

    ReactDOM.render(<Alert {...props} />, div)
}

export {
    Alert,
    Portal
}
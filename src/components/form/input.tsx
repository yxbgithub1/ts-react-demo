import React, { Component } from 'react'

interface IInputProps {
    value: string,
    name?: string,
    onChange: (e: any) => void
}

class Input extends Component<IInputProps, {}> {
    onChange = (e: any) => {
        this.props.onChange(e.target)
    }

    render() {
        const { name, value } = this.props
        return (
            <input data-name={name} value={value} onChange={this.onChange} />
        )
    }
}


export {
    Input
}
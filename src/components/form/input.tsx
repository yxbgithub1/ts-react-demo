import React, { PureComponent } from 'react'
import { InputType } from './type'
import './style.scss'

interface IInputProps {
    value: string,
    name?: string,
    type: InputType,
    placeholder?: string,
    maxLength?: number,
    className?: string,
    onChange: (value: string, name?: string) => void
}

interface IInputState {
    isFocus: boolean
}

export class Input extends PureComponent<IInputProps, IInputState> {

    state: IInputState = {
        isFocus: false
    }

    onChange = ({ target: { value, dataset: { name } } }: any) => this.props.onChange(value, name)


    render() {
        const { name, ...rest } = this.props

        return (
            <input
                {...rest}
                data-name={name}
                onChange={this.onChange} />
        )
    }
}
import './style.scss'
import React from 'react'

const Form = (props: any) => {
    return (
        <form className='form'>
            {props.children}
        </form>
    )
}

const FormItem = (props: any) => {
    return (
        <div className={`form-item ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

const FontSubmit = (props: any) => {
    return (
        <FormItem>
            <button className='button'>{props.children}</button>
        </FormItem>
    )
}

export {
    Form,
    FormItem,
    FontSubmit
}
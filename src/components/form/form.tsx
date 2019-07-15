import './style.scss'
import React from 'react'

const Form = (props: any) => {
    function onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            {props.children}
        </form>
    )
}

const FormItem = (props: any) => {
    return (
        <div className={`form-item flex ${props.className || ''}`}>
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
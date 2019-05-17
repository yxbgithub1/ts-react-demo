import React from 'react'

/**
 * 最外层元素
 */
const Page = (props: any) => (
    <div className='page'>
        {props.children}
    </div>
)


const Container = (props: any) => {
    return (
        <div className={`container ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export {
    Page,
    Container
}
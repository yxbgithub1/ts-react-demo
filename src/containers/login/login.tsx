import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.scss'
import Base from '@conts/base'
import { Page } from '@comps'
import puerRender from 'pure-render-decorator'

@puerRender
class Login extends Base {
    onClick = () => {
        this.routerGo('/home')
    }
    render() {
        return (
            <Page>
                <div className='login'>
                    登陆页面
                    <p>
                        <button onClick={this.onClick}>去首页</button>
                    </p>
                </div>
            </Page>
        )
    }
}

export {
    Login
}
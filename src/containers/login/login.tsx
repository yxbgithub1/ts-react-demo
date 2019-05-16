import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.scss'
import { Base } from '@containers/base'
import { Page } from '@components'
import { withLogin } from '../../utils'
// import { observer, inject } from 'mobx-react'
import puerRender from 'pure-render-decorator'

@withLogin
@puerRender
class Login extends Base {

    componentWillMount() {
        // console.log(this.props.location)
        // if(this.token){
        // }
    }


    onClick = () => {
        this.routerGo('/home')
    }

    goOther = () => {
        this.props.history.push('/login1')
    }

    render() {
        return (
            <Page>
                <div className='login'>
                    登陆页面
                    <p>
                        <button onClick={this.onClick}>去首页</button>
                    </p>
                    <button onClick={this.goOther}>访问不存在的路由</button>
                </div>
            </Page>
        )
    }
}

export {
    Login
}
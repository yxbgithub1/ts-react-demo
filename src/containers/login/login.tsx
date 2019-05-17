import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.scss'
import { Base } from '@containers/base'
import { Container } from '@components'
// import { observer, inject } from 'mobx-react'
import puerRender from 'pure-render-decorator'

@puerRender
export default class Login extends Base {

    onClick = () => {
        this.routerGo('/home')
    }

    goOther = () => {
        this.props.history.push('/login1')
    }

    render() {
        return (
            <Container>
                <div>
                    登陆
                </div>
            </Container>
        )
    }
}
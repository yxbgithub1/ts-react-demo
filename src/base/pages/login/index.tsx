import React from 'react'
import Base from '@/base'
import { Storage } from '@utils'

export default class Login extends Base {
    login = () => {
        Storage.set('token', 123)
        this.history.push('/')
    }
    render(){
        return (
            <section>
                <h1>登录</h1>
                <button onClick={this.login}>登录</button>
            </section>
        )
    }
}
import React from 'react'
import Base from '@/base'
import { Storage } from '@utils'

export default class Login extends Base {
    login = () => {
        this.route.push('admin')
        Storage.set('token', 123)
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
import React from 'react'
import './style.scss'
import { Base } from '@containers/base'
import { Form, FormItem, FontSubmit, Container } from '@components'
// import { observer, inject } from 'mobx-react'
import puerRender from 'pure-render-decorator'

@puerRender
export default class Login extends Base {
    render() {
        return (
            <Container className='login vertical-middle'>
                <div className='login-inner border radius6 pg25'>
                    <h3>登陆</h3>
                    <Form>
                        <FormItem>
                            <input placeholder='请输入手机号' />
                        </FormItem>
                        <FormItem className='flex'>
                            <div className='child'>
                                <input placeholder='请输入验证码' />
                            </div>
                            <div className='child'>
                                <button>获取验证码</button>
                            </div>
                        </FormItem>
                        <FontSubmit>
                            登陆
                        </FontSubmit>
                    </Form>
                </div>
            </Container>
        )
    }
}
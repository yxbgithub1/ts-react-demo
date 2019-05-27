import React from 'react'
import './style.scss'
import { Base } from '@containers'
import { Form, FormItem, Container, Input, IconFont } from '@components'

interface IProps {

}

interface IState {
    mobile: string,
    code: string,
}

export default class Login extends Base<IProps, IState> {
    state: IState = {
        mobile: '',
        code: '',
    }

    onInputChange = (value: any, name: any) => this.setState({ [name]: value })

    render() {
        const { mobile, code } = this.state
        return (
            <Container className='login'>
                <div className='login-inner border radius8 pg40'>
                    <h3 className='mg-top5 mg-bottom60'>验证码登录</h3>
                    <Form>
                        <FormItem>
                            <Input
                                type='tel'
                                name='mobile'
                                maxLength={11}
                                value={mobile}
                                className='pg-left50'
                                placeholder='请输入手机号'
                                onChange={this.onInputChange} />
                            <div className='border-scale'></div>
                            <IconFont className='icon fonts small' type='iconmobile' />
                        </FormItem>

                        <FormItem>
                            <Input
                                type='tel'
                                name='code'
                                value={code}
                                maxLength={6}
                                className='pg-left50 u12'
                                placeholder='请输入验证码'
                                onChange={this.onInputChange} />
                            <div className='border-scale'></div>
                            <IconFont className='icon fonts tiny iconcode' type='iconpassword' />
                            <button className='noborder basic tiny button getcode'>
                                <span>获取验证码</span>
                            </button>
                        </FormItem>

                        <FormItem className='mg-top70'>
                            <button className='fluid violet button fonts medium'>登陆</button>
                        </FormItem>
                    </Form>
                </div>
            </Container>
        )
    }
}
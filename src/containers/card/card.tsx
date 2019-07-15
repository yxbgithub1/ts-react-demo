import React from 'react'
import './style.scss'
import { Base } from '@containers'
import { CardProps, CardState } from './@type'
import { CardPopups } from './components'
import { Form, FormItem, Input, Container, IconFont } from '@components'

const FILE_MAX_SIZE = 1024 * 1024 * 6 // 最大允许上传6M图片文件
export default class Card extends Base<CardProps, CardState> {
    state: CardState = {
        name  : '',
        mobile: '',
        src  : ''
    }
    // @ts-ignore
    onFindDesc = () => this.refs.cardProps.onToggle(true)
    /** input输入 */
    onInputChange = (value: any, name: any) => this.setState({ [name]: value })

    /** 选择图片 */
    onFileChange = (e: any) => {
        const file = e.target.files[0]
        if (!file) {
            return console.warn('图片上传失败');
        }
        if (file.size > FILE_MAX_SIZE) {
            return console.warn('最大允许上传6M的图片')
        }
        this.readAsFileURl(file)
    }

    /** 读取图片文件信息 */
    readAsFileURl = (file: Blob) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)  // 读取base64格式
        reader.onload = ({ target: { result } }: any) => this.setState({ src: result })
    }

    /** 提交表单 */
    onSubmit = () => {
        console.log(this.state, '提交表单')
    }

    render(){
        const { name, mobile, src } = this.state
        return (
            <Container className='card'>
                <div className='inner'>
                    <Form className='form'>
                        <FormItem className='mg-bottom30'>
                            <Input
                                type='text'
                                name='name'
                                value={name}
                                className='input'
                                placeholder='请输入姓名'
                                onChange={this.onInputChange} />
                        </FormItem>
                        <FormItem className='mg-bottom30'>
                            <Input
                                type='tel'
                                name='mobile'
                                value={mobile}
                                maxLength={11}
                                className='input'
                                placeholder='请输入手机号码'
                                onChange={this.onInputChange} />
                        </FormItem>
                        <FormItem className='mg-bottom30'>
                            <div className='label u12'>
                                <b>请添加您的微信二维码</b>
                                <IconFont 
                                    onClick={this.onFindDesc}
                                    className='icon fonts small' 
                                    type='iconicon-question'/>
                            </div>
                            <div className='upload'>
                                {
                                    src 
                                    ? <img src={src} alt="qrcode"/> 
                                    : <div>
                                        <IconFont className='add' type='icontianjia' />  
                                        <input 
                                            type="file" 
                                            className='upload-input' 
                                            onChange={this.onFileChange}/>
                                    </div>
                                }
                            </div>
                        </FormItem>
                        <FormItem>
                            <button
                                onClick={this.onSubmit}
                                className='fluid violet button fonts medium'>
                                生成海报
                            </button>
                        </FormItem>
                    </Form>
                </div>
                <CardPopups ref='cardProps'/>
            </Container>
        )
    }
}
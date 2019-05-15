import React from 'react'
import Base from '../base'
import { UInput, Input } from '@comps'
import { withLogin } from '../../utils'
import puerRender from 'pure-render-decorator'

interface IProps {
    token?: any
}

interface IState {
    userName: string
}

@withLogin
@puerRender
class Home extends Base<IProps, IState> {

    state: IState = {
        userName: ''
    }

    componentWillMount() {
        // console.log('home容器')
    }

    onInputChange = ({ dataset, value }: any) => {
        this.setState({
            [dataset.name]: value
        })
    }

    goLogin = () => {
        this.routerGo('/login')
    }

    goOther = () => {
        this.routerGo('/login1')
    }

    render() {
        return (
            <div>
                <h3>首页</h3>
                <UInput />
                <p>
                    <Input
                        name='userName'
                        value={this.state.userName}
                        onChange={this.onInputChange} />
                </p>
                <p>
                    <button onClick={this.goLogin}>去登陆</button>

                    <button onClick={this.goOther}>访问不存在的路由</button>
                </p>
            </div>
        )
    }
}

export {
    Home
}
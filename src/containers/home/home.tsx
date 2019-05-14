import React from 'react'
import BaseContainer from '../base'
import { UInput, Input } from '@comps'
import puerRender from 'pure-render-decorator'

interface IProps {

}

interface IState {
    userName: string
}

@puerRender
class HomeContainer extends BaseContainer<IProps, IState> {

    state: IState = {
        userName: ''
    }

    onInputChange = ({ dataset, value }: any) => {
        this.setState({
            [dataset.name]: value
        })
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
            </div>
        )
    }
}

export {
    HomeContainer
}
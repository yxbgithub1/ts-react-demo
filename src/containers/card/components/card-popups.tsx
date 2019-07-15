import React, { Component } from 'react'
import './style.scss'

import { CardDesc } from './card-desc'
import { CardPopupsProps, CardPopupsState } from '../@type'

export class CardPopups extends Component<CardPopupsProps, CardPopupsState> {
    state: CardPopupsState = {
        visible: false
    }

    onToggle = (visible: boolean) => this.setState({ visible })

    render(){
        const { visible } = this.state
        return (
            <div className='card-popups' style={{'display': `${visible ? 'block': 'none'}`}}>
                <div className='card-popups-inner'>
                    <CardDesc onOk={()=> this.onToggle(false)}/>
                </div>
            </div>
        )
    }
}
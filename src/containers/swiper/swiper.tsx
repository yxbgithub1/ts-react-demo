import React from 'react'
import { Base } from '@containers'
import './style.scss'
// @ts-ignore
import SwiperComponent from './assets/swiper.min.js'
import './assets/swiper.css'

interface Props {

}
interface State {

}

export default class Swiper extends Base<Props, State> {
    
    componentDidMount(){
        new SwiperComponent('.swiper-container', {
            direction : 'vertical',
        })
    }

    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" data-id="0">Slide 1</div>
                    <div className="swiper-slide" data-id="1">Slide 2</div>
                </div>
            </div>
        )
    }    
}
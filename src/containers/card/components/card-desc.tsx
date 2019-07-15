import React from 'react'
import Qrcode from '../imgs/qrcode.png'

const CardDesc = (props: any) => (
    <div className='desc'>
        <h1>添加说明</h1>
        <ul>
            <li>1. 打开微信-点击【我的】- 点击【头像】- 点击【我的二维码】;</li>
            <li>2. 点击右上角【...】- 点击【保存图片】;</li>
            <li>3. 苹果用户需在相册将二维码剪切成如下图所示;</li>
            <li>4. 点击"+"号选择已保存的个人微信二维码;</li>
        </ul>
        <div className='mg-top20'>
            <img 
                src={Qrcode} 
                alt='wx-qrcode'
                className='qrcode'/>
        </div>
        <div className='mg-top40'>
            <button
                onClick={props.onOk}
                className='fluid violet button fonts medium'>
                好的
            </button>
        </div>
    </div>
)

export {
    CardDesc
}
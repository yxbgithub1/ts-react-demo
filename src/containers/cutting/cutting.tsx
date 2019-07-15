import React, { Component } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
/**
 * 图片裁切
 * @class Cutting
 * @extends {Component}
 */
class Cutting extends Component {

    componentDidMount() {
        const image = document.getElementById('image')
        // const cropper = new Cropper(image, {
        //     aspectRatio: 16 / 9
        // })
    }

    onCutting = () => {

    }

    _crop() {
        // image in dataUrl
        // console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    }

    render() {
        return (
            <div>
                {/* <Cropper
                    ref='cropper'
                    src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
                    style={{ height: 400, width: '100%' }}
                    aspectRatio={16 / 9}
                    guides={false}
                    crop={this._crop.bind(this)} /> */}
                <div>
                    <button
                        onClick={this.onCutting}
                        className='fluid violet button fonts medium'>登陆</button>
                </div>
            </div>
        )
    }
}

export {
    Cutting
}
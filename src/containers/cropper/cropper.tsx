import React, { Component } from 'react'
import ReactCropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import './style.scss'

import { Props, State } from './type'
import { Flex, FlexChild } from '@components'

const FILE_MAX_SIZE = 1024 * 1024 * 6 // 最大允许上传6M图片文件
export default class Cropper extends Component<Props, State> {
    state: State = {
        src: '',
        base64: '',
    }

    /** 选择图片 */
    onFileChange = (e: any) => {
        const file = e.target.files[0]
        if (!file) {
            return console.warn('图片上传失败');
        }
        if (file.size > FILE_MAX_SIZE) {
            return console.warn('最大允许上传6M的图片')
        }
        console.log('上传文件大小(M)', `${file.size / 1024 / 1024}`)
        this.setState({ base64: '' }, () => this.readAsFileURl(file))
    }

    /** 读取图片文件信息 */
    readAsFileURl = (file: Blob) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ({ target: { result } }: any) => this.drawImage(result)
        // reader.onload = ({ target: { result } }: any) => this.setState({ src: result })
    }

    /** 压缩图片 */
    drawImage = (path: string, scale = 0.5) => {
        const img = new Image();
        const start = Date.now()
        img.src = path;

        img.onload = () => {
            const imgHeight = img.height;
            const imgWidth = img.width;
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            const docEL = document.documentElement

            // console.log('设备尺寸', [docEL.clientWidth, docEL.clientHeight])
            canvas.width = docEL.clientWidth;
            canvas.height = docEL.clientHeight;

            console.log('图片百分比', `${(imgWidth / imgHeight) * 100}%`)
            console.log('图片尺寸', [imgWidth, imgHeight])
            console.log('设备尺寸', [docEL.clientWidth, docEL.clientHeight])

            context && context.drawImage(img, 0, 0, imgWidth, imgHeight);
            const end = Date.now()
            console.log('加载时间(秒)', (end - start) / 1000)

            const base64 = canvas.toDataURL('image/jpeg', scale);
            this.setState({ src: base64 }, () => {
                if (imgWidth / imgHeight > 0.7) {
                    console.log('4:3尺寸')
                    // @ts-ignore
                    this.refs.cropper.rotate(90)
                }
            });
        };
    }

    /** 裁切&获取裁切图片(base64) */
    onCrop = () => {
        if (!this.state.base64) {
            // @ts-ignore
            const base64 = this.refs.cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.4)
            // console.log('裁切后base64', base64)

            // @ts-ignore
            this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
                const FD = new FormData()
                FD.append("file", blob, 'i.jpeg');
                console.log('对象大小', blob.size / 1024 / 1024)
            }, 'image/jpeg')

            this.setState({ base64 }, () => {
                // console.log('裁切图片', this.state.base64)
            })
        }
    }

    onRotate = (angle: number | string) => {
        // @ts-ignore
        this.refs.cropper.rotate(angle)
    }

    render() {
        const { src, base64 } = this.state
        return (
            <div className='react-cropper-container'>
                <ReactCropper
                    ref='cropper'
                    src={src}
                    dragMode="move"
                    viewMode={0}
                    aspectRatio={16 / 9}
                    className='cropper' />
                <Flex className='align center footer'>
                    <FlexChild>
                        <b>选择图片</b>
                        <input
                            type='file'
                            accept="image/*"
                            // mutiple="mutiple"
                            className='u3 upload'
                            onChange={this.onFileChange} />
                    </FlexChild>
                    <FlexChild>
                        <b onClick={this.onCrop}>确认裁切</b>
                    </FlexChild>
                </Flex>
                <div style={{ display: src ? 'flex' : 'none', }} className='rotate'>
                    <label className='left' onClick={() => this.onRotate(-90)}>左旋</label>
                    <label className='right' onClick={() => this.onRotate(90)}>右旋</label>
                </div>
                <div className='modal' style={{ display: base64 ? 'flex' : 'none', }}>
                    <img
                        alt='待上传图片'
                        src={base64}
                        className='modal-img' />
                </div>
            </div>
        )
    }
}
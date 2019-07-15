import Cropper from './cropper'
export {
    Cropper
}

/** 选择图片 */
    // chooseImages = (files) => {
    //     const file = files[0];
    //     if (!file) {
    //         return console.warn('图片上传失败');
    //     }
    //     if (file.size > FILE_MAX_SIZE) {
    //         return console.warn('只能上传小于4M的图片');
    //     }
    //     this.readerAsFileBase64(file);
    // }

/** 读取图片文件信息 */
    // readerAsFileBase64 = (file) => {
    //     // eslint-disable-next-line no-undef
    //     const reader = new FileReader();
    //     // 读取结果为base64格式
    //     reader.readAsDataURL(file);
    //     reader.onload = ({ target: { result } }) => this.drawImage(result);
    // }

/** 压缩图片 */
    // drawImage = (path, scale = 0.5) => {
    //     // eslint-disable-next-line no-undef
    //     const img = new Image();
    //     img.src = path;
    //     img.onload = () => {
    //         const imgHeight = img.height;
    //         const imgWidth = img.width;
    //         const canvas = document.createElement('canvas');
    //         const context = canvas.getContext('2d');
    //         canvas.width = imgWidth;
    //         canvas.height = imgHeight;
    //         context && context.drawImage(img, 0, 0, imgWidth, imgHeight);

    //         const base64 = canvas.toDataURL('image/jpeg', scale);
    //     };
    // }
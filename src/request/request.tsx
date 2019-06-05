import axios from 'axios'
import { format, appkey, baseUrl, timeout } from './config'
import { RequestMethod, RequestParam, RequestConfig } from './type'
import { Message } from '@components'

class Request {
    static httpStatus = (res: any) => {
        console.log('请求成功', res)
        return res
    }

    static success = (res: any) => {
        console.log('响应成功', res)
        return res
    }

    static error = (err: Error) => {
        // console.log('请求报错', err)
        // Alert.open('请求报错')
        // Message('这是一个服务器弹窗')
        Message({
            type: 'success',
            message: '这是一个成功提示'
        })

        return err
    }

    static request = ({ code, ...rest }: RequestParam) => {
        const configs: RequestConfig = {
            baseUrl,
            timeout,
            url: code,
            headers: {
                format,
                appkey,
                method: code
            },
            ...rest
        }

        return axios(configs)
            .then(Request.httpStatus)
            .then(Request.success)
            .catch(Request.error)
    }

    post: RequestMethod = (param) => Request.request({ ...param, method: 'POST' })
}

export default new Request()
import request from '../request'
import { APP_ID, DEVICE_ID, GRANT_TYPE } from './config'
import { LoginParam } from '../type'

/** 验证码登陆 */
export const login = (form: any) => {
    const data: LoginParam = {
        app_id: APP_ID,
        device_id: DEVICE_ID,
        grant_type: GRANT_TYPE,
        ...form
    }
    return request.post({
        data,
        code: 'cas.oauth.getToken',
    })
}
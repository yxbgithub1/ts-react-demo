declare namespace Request {
    type HeaderFormat = 'json'
    type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE'

    interface BaseHeaders {
        method: string,
        format: HeaderFormat,
        appkey: string | number,
    }

    interface CommonOptions {
        data?: any,
        readonly method?: RequestType
    }

    // axios config 入参
    interface RequestConfig extends CommonOptions {
        url: string,
        timeout: number,
        baseUrl: string,
        headers: BaseHeaders
    }

    // 接口请求入参
    interface RequestParam extends CommonOptions {
        code: string,
    }

    interface RequestMethod {
        (options: RequestParam): Promise
    }

    // 用户登陆
    type Grant_Type = 'password' | 'captcha' | 'mobile_and_password' | 'qr_code' | 'refresh_qr_code' | 'refresh_token' | 'face'

    interface LoginParam {
        app_id: string,
        device_id: string,
        grant_type: Grant_Type,
        account: string | number,
        password: string
    }

    // interface API {
    //     (options: {
    //         app_id: string,
    //         device_id: string,
    //         grant_type: Grant_Type,
    //         account: string | number,
    //         password: string
    //     }): Promise
    // }
    // function Login(options: {
    //     app_id: string,
    //     device_id: string,
    //     grant_type: Grant_Type,
    //     account: string | number,
    //     password: string
    // }): Promise
}

export = Request
export as namespace Request
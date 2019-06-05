const format = 'json'

const timeout = 5000

const dev = process.env.NODE_ENV === 'development'

const appkey = dev ? '50358' : '80012'

const baseUrl = dev ? '' : ''


export {
    dev,
    format,
    appkey,
    baseUrl,
    timeout
}

const localStorage = window.localStorage

const DB = {
    get(key: string) {
        let value: any = localStorage.getItem(key)
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
        return value
    },
    set(key: string, value: any) {
        if (typeof value === typeof {}) value = JSON.stringify(value)
        return localStorage.setItem(key, value)
    },
    remove(key: string) {
        return localStorage.removeItem(key)
    }
}

const getToken = () => DB.get('token') || true

export {
    DB,
    getToken
}
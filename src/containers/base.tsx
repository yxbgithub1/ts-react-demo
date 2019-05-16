import React from 'react'
import { DB } from '@utils'

class Base<P={}, S={}> extends React.Component<{ history?: any }> {
    routerGo(url: string) {
        this.props.history.push(url)
    }

    routerPush() { }

    routerBack() { }

    get token() {
        return DB.get('token') || true
    }
}

/**
 * 404
 */
const NotFound = () => (
    <div>
        <h3>404</h3>
        <div>
            没有找到这个页面
        </div>
    </div>
)

export {
    Base,
    NotFound
}
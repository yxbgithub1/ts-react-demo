import { RouteComponentProps } from 'react-router-dom'
declare namespace Base {
    type PathParamsType = {
        // type whatever you expect in the this.props.match.params.*
    }
    type PropsType = RouteComponentProps<PathParamsType> & {
        history?: any,
        routes?: any
        // your props here
    }
    /** 路由事件 */
    type RouterEvent = {
        back: () => void,
        forward: () => void,
        go: (step: number) => void
        push: (path: string) => void,
        replace: (path: string) => void,
    }
}
export = Base
export as namespace Base
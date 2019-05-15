import React from 'react'
import DB from '../utils'
// import routes from './routes'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import {
    Login,
    Home
} from '@conts'

// 登陆状态
const token = DB.get('token') || false
const PrivateRoute = (route: any) => {
    const { component: Component, ...rest } = route
    return (
        <Route
            {...rest}
            render={(props: any) =>
                token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}
// const RouterWithSubRoutes = ({ routes }: any) => {
//     const _render = (route: any) => ((props: any) => (<route.component {...props} routes={route.routes} />))
//     return routes.map((route: any) => (
//         !route.auth ? (
//             <Route
//                 path={route.path}
//                 exact={route.exact}
//                 key={route.path}
//                 render={_render(route)} />
//         ) : (<PrivateRoute key={route.path} {...route} />)
//     ))
// }

const RouterWithSubRoutes = ({ routes }: any) => {
    const _render = (route: any) => {
        console.log('路由变化了', route)
        return (props: any) => (<route.component {...props} routes={route.routes} />)
    }
    return routes.map((route: any) => (
        <Route
            path={route.path}
            exact={route.exact}
            key={route.path}
            render={_render(route)} />
    ))
}

/* <RouterWithSubRoutes routes={routes} /> */
const RootRouter = () => (
    <Router>
        <Switch>
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/home' component={Home} />

            <Redirect to={{ pathname: '/home' }} />
        </Switch>
    </Router>
)

export {
    RootRouter,
    RouterWithSubRoutes
}
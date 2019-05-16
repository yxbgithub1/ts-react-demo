import React from 'react'
import { DB } from '@utils'
import routes from './routes'
import { Layout } from '@containers'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// 登陆状态
const token = DB.get('token') || true
const PrivateRoute = ({ component: Component, ...rest }: any) => (
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
// routes.map((item: any, index: any) => (
//     !item.auth ? (<Route key={index} {...item} />) : (<PrivateRoute key={index} {...item} />)
// ))

const RouteWithSubRoutes = ({ routes }: any) => (
    <Switch>
        {
            routes.map((item: any, index: any) => (<Route key={index} {...item} />))
        }
        <Redirect to={{ pathname: '/404' }} />
    </Switch>
)

const App = () => (
    <HashRouter>
        <Layout>
            <RouteWithSubRoutes routes={routes} />
        </Layout>
    </HashRouter>
)

export {
    App,
    PrivateRoute,
    RouteWithSubRoutes
}
import React from 'react'
import routes from './routes'
import { Layout } from '@containers'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

const RouteWithSubRoutes = ({ routes }: any) => (
    <Switch>
        {routes.map((item: object, index: number) => (<Route key={index} {...item} />))}
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
    RouteWithSubRoutes
}
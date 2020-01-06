import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
interface Props {
    routes?: any
    redirect?: string
    no?: boolean
}
const Routers = ({ routes, redirect, no = false }: Props) => (
    <Switch>
        {routes &&
            routes.map((route: any) => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={props => <route.component {...props} routes={route.routes} />}
                />
            ))}
        {redirect ? <Redirect to={redirect} /> : null}
        {no ? <Redirect to={{ pathname: '/404' }} /> : null}
    </Switch>
)
export { Routers }

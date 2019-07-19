import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Routers = ({routes, redirect, no = false}: any) => (
    <Switch>
        {routes.map((route: any, index: number) => (
            <Route 
                key={index}
                path={route.path} 
                exact={route.exact}
                render={props => <route.component {...props} routes={route.routes} />}
            />
        ))}
        { redirect ? <Redirect to={redirect} /> : null }
        { no ? <Redirect to={{ pathname: '/404' }} /> : null }
    </Switch>
)
export { Routers }
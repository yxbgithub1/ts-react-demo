import { Route, Switch, Redirect } from 'react-router-dom'
const RouteWithRoutes = ({ routes }: any) => (
    <Switch>
        { routes.map((item: object, index: number) => (<Route key={index} {...item} />)) }
        <Redirect to={{ pathname: '/404' }} />
    </Switch>
)
export {
    RouteWithRoutes
}
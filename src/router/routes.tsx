import {
    Login,
    Home,
    NotFound
} from '@containers'

// const HocRoute = (WrapComponent: any) => {
//     return class extends React.Component<{ location?: any }> {
//         shouldComponentUpdate(nextProps: any) {
//             return nextProps.location !== this.props.location
//         }
//         render() {
//             return <WrapComponent {...this.props} />
//         }
//     }
// }

export default [
    {
        path: '/login',
        name: 'login',
        exact: true,
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        auth: true,
        component: Home,
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
    }
]

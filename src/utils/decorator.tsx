// export const withLogin = (component: any) => {
//     // const componentWillMount = component.prototype.componentWillMount
//     // component.prototype.componentWillMount = function () {
//     //     console.log(this.props)
//     //     const { history, location } = this.props

//     //     if (location.pathname === '/login') {
//     //         history.push('/home')
//     //     }
//     //     componentWillMount.apply(this)
//     // }
//     const toString = component.prototype.toString
//     component.prototype.toString = function () {
//         console.log(this)
//         toString.apply(this)
//     }
//     return component
// }

function withLogin(component: any) {
    component.prototype.value = function () {
        console.log(1)
    }
    return component
}

export {
    withLogin
}
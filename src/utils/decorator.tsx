// export const login = (target: any, name: any, descriptor: any) => {
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }
export const withLogin = (component: any) => {
    const componentWillMount = component.prototype.componentWillMount
    component.prototype.componentWillMount = function () {
        // console.log(this.props)
        // const { history, location } = this.props
        componentWillMount.apply(this)
    }
    return component
}


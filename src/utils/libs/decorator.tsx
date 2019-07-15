const withLogin = (component: any) => {
    const componentWillMount = component.prototype.componentWillMount
    component.prototype.componentWillMount = function () {
        console.log(this.props)
        const { history, location } = this.props

        if (location.pathname === '/login') {
            history.push('/home')
        }
        componentWillMount.apply(this)
    }
    return component
}

export {
    withLogin
}
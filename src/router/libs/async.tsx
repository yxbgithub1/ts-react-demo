import React from 'react'
/**
 * 异步渲染组件(按需加载)
 * @param {{ (): Promise<any>; (): void; }} importComponent
 * @returns
 */
export function asyncComponent(importComponent: { (): Promise<any>; (): void }) {
    return class AsyncComponent extends React.Component<{}, { component: any }> {
        constructor(props: any) {
            super(props)
            this.state = {
                component: null,
            }
        }
        async componentDidMount() {
            const { default: component } = await importComponent()
            this.setState({ component })
        }
        render() {
            const C = this.state.component
            return C ? <C {...this.props} /> : ''
        }
    }
}

import React from 'react'
import Base from '@/base'
import { Routers } from '@components'

export default class JD extends Base {
    render() {
        const { match, routes } = this.props
        console.log(routes)
        return (
            <Routers routes={routes} redirect={`${match.path}/goods`} />
        )
    }
}
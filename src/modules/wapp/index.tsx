import React from 'react'
import Base from '@/base'
import { Routers } from '@components'

export default class Wapp extends Base {
    render() {
        const { match, routes } = this.props
        return (
            <Routers routes={routes} redirect={`${match.path}/goods`} />
        )
    }
}
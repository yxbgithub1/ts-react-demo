import React from 'react'
import Base from '@/base'
import { Storage } from '@utils'
import { routes } from './routes'
import { Link } from 'react-router-dom'
import { RouteWithRoutes } from '@router'
export class Mainer extends Base {
    logout = () => {
        Storage.remove('token')
        this.route.push('login')
    }
    render(){
        return(
            <main>
                <h1>主体内容</h1>
                <button onClick={this.logout}>退出登陆</button>
                <p>
                    <Link to='/admin/wapp'><button>外部APP</button></Link>
                    <Link to='/admin/website'><button>官网</button></Link>
                    <Link to='/admin/wx'><button>wx</button></Link>
                </p>
                <p>
                    <RouteWithRoutes routes={routes}/>
                </p>
            </main>
        )
    }
}
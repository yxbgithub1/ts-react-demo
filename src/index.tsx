import React from 'react'
import 'antd/dist/antd.css'
import '@assets/scss/base.scss'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Routers } from '@/components'
import { routes } from '@/base/routes'
import Layout from 'base/layout'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routers routes={routes} no={true} />
        </Layout>
    </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

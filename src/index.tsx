import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/scss/base.scss';
import * as serviceWorker from './serviceWorker';
import { routes, RouteWithRoutes } from '@/router'
import Layout from '@/base/layout'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <Layout>
            <RouteWithRoutes routes={routes} />
        </Layout>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

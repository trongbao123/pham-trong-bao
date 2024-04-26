import React from 'react'
import { useRoutes } from "react-router"
import Currencies from '../containers/currencies'
import Home from '../themes/home'


const Routers = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '/',
                    element: <Currencies />,
                },
            ],
        },
    ])
    return routing
}

export default Routers
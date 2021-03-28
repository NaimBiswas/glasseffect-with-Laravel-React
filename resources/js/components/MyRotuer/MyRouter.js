import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login'

const MyRouter = () => {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
        </div>
    )
}

export default MyRouter

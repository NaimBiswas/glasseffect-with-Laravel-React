import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import MyRouter from './MyRotuer/MyRouter';
import Nav from './Nav';
import './Main.css'

function Example() {
    return (
        <Fragment>

            <div className="body">
                <BrowserRouter>

                    <Nav />
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <MyRouter />
                </BrowserRouter>
            </div>
        </Fragment>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

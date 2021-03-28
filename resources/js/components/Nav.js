import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Main.css"

const Nav = () => {
    const [Sticky, setSticky] = useState(false)


    const ChangeNav = () => {
        if (window.scrollY >= 70) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }
    window.addEventListener('scroll', ChangeNav)

    return (
        <Fragment>
            <nav style={{ transition: '400ms' }} className={`navbar navbar-expand-lg navbar-dark bg-danger ${Sticky ? 'StickyHeader' : ''}`}>
                <NavLink className="navbar-brand" to="/">
                    SEO
                 </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/#">
                                Services
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/#">
                                About Us
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/#">
                                Compaines
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/#">
                                Pricing
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/#">
                                Some Review
                        </NavLink>
                        </li>



                    </ul>
                    <NavLink className="btn btn-outline-warning my-2 my-sm-0" exact to="/login">
                        Login
                    </NavLink>
                    <NavLink
                        className="btn btn-outline-warning my-2 my-sm-0 ml-3"
                        to="/register"
                    >
                        Register
                    </NavLink>
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav

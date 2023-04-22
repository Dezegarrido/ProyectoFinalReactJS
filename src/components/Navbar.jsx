import React from "react";
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <div className="container" id="navbar">
            <div className="row">
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/botas"}>Botas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/borcegos"}>Borcegos</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-6 d-flex justify-content-end aling-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
)
}

export default NavBar;
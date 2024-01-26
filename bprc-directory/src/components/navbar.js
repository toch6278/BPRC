import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
    return (
        <div className = 'navbar'>
            <div className = 'navbar-logo'> BPRC Resource Directory </div>
            <ui className = 'navbar-menu'>
                <li> <Link to = "/"> Home </Link> </li>
                <li> <Link to = "/search"> Search </Link> </li>
                <li> <Link to = "/new-resource"> + New Resource </Link> </li>
            </ui>
        </div>
    )
}

export default Navbar
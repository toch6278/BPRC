import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

// style link
const logoStyle = {
    textDecoration: 'none', 
    color: '#0A5A75',
    margin: '10px'
};

// style link
const linkStyle = {
    textDecoration: 'none', 
    color: '#0A5A75',
    margin: '10px'
};

function Navbar() {
    return (
        <div className = 'navbar'>
            <Link to = "/" style = {logoStyle}>
                <span className = 'navbar-logo'> 
                    BPRC Resource Directory
                </span> 
            </Link>
            <div className = "links">
                {/* <Link to = "/search"style = {linkStyle}> Search </Link> */}
                <Link to = "/new-resource" style = {linkStyle}> + New Resource </Link>
            </div>
        </div>
    )
}

export default Navbar
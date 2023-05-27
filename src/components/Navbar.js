 import React from 'react'
 import './Navbar.css'
 
 
 const Navbar = () => {
    
 
    return (
        <div className="navbar container">
            <a href="#" className="logo">F<span>oo</span>diesHub</a>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#recipe">Recipes</a>
                <a href="#search">Search</a>
            </div>
        </div>
    )
    }

export default Navbar;

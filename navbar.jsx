import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


export const Navbar = () => {
    return <div className="navbar">
        <div className="Links">
<Link to="/">HOME</Link>
<Link to="/about">ABOUT</Link>
<Link to="/cart">
<ShoppingCart size={32}/></Link>
        </div>
        </div>
};
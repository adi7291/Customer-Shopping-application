import React from 'react'
import { NavLink } from "react-router-dom"

import { FaShoppingCart } from 'react-icons/fa';

import './header.css'
import { ContextCart } from '../Context';
function Header({ }) {

    const { cart } = React.useContext(ContextCart)
    return (
        <div className="link" style={{ marginTop: "0%", display: "flex", justifyContent: "space-around" }}>

            <NavLink to='/'>Home</NavLink>

            <NavLink to='cart'>
                <FaShoppingCart />
                <span style={{ color: "red", fontSize: "20px", position: "absolute" }}>{cart.length}</span>

            </NavLink>

            {/* <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink> */}

        </div>
    )
}

export default Header
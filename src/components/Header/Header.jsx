import React from 'react';
import './Header.css'
import surupaLogo from '../../images/logo.svg'
const Header = ({cart}) => {

    return (
        <nav>
            <img src={surupaLogo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
                <a href="/cart">Cart${cart.price}</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
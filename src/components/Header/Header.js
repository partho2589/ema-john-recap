import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div className='a-container'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about"> About</a>
            </div>
        </nav>
    );
};

export default Header;
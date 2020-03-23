import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavMenu.css'

export default function NavMenu() {
    return (
        <Navbar light >
            <NavbarBrand tag={Link} to="/">
                <img className='logo' src="logo.png" alt="logo" />
            </NavbarBrand>
        </Navbar>
    );
}

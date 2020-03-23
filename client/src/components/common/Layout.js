import React from 'react';
import NavMenu from './NavMenu';

const Layout = (props) => (
    <div>
        <NavMenu />
        {props.children}
    </div>
);

export default Layout;

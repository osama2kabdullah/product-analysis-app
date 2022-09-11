import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='p-2 text-xl font-bold uppercase flex gap-5 text-white font-mono justify-end bg-orange-600'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;
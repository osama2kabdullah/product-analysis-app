import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const Header = () => {
    return (
        <nav className='p-2 text-xl font-bold uppercase flex gap-5 text-white font-mono justify-end bg-orange-600'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
        </nav>
    );
};

export default Header;
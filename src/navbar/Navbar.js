import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
};

export default Navbar;
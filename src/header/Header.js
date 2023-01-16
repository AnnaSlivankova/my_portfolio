import React from 'react';
import style from './Header.module.css';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const handleScrollProfile = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className={style.header}>
                <a className={style.btnProfile} onClick={handleScrollProfile}>Profile</a>
                <Navbar/>
        </div>
    );
};

export default Header;
import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    const handleScrollAbout = () => {
        const element = document.getElementById('section-2');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleScrollSkills = () => {
        const element = document.getElementById('section-3');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleScrollProjects = () => {
        const element = document.getElementById('section-4');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleScrollContacts = () => {
        const element = document.getElementById('section-5');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (

        <div className={style.nav}>
            <a className={style.link} onClick={handleScrollAbout}>About</a>
            <a className={style.link} onClick={handleScrollSkills}>Skills</a>
            <a className={style.link} onClick={handleScrollProjects}>Projects</a>
            <a className={style.link} onClick={handleScrollContacts}>Contact</a>
        </div>

    );
};

export default Navbar;
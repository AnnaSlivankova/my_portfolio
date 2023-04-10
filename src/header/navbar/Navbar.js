import React from 'react';
import style from './Navbar.module.scss';
import { Link } from "react-scroll";

const Navbar = () => {

    return (
        <div className={style.nav}>
            <Link to='section-2' activeClass={style.active} spy={true} smooth={true} offset={-70} duration= {500}>About</Link>
            <Link to='section-3' activeClass={style.active} spy={true} smooth={true} offset={-70} duration= {500}>Skills</Link>
            <Link to='section-4' activeClass={style.active} spy={true} smooth={true} offset={-70} duration= {500}>Projects</Link>
            <Link to='section-5' activeClass={style.active} spy={true} smooth={true} offset={-70} duration= {500}>Contact</Link>
        </div>
    );
};

export default Navbar;
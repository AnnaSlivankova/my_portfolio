import React from 'react';
import style from './Header.module.scss';
import Navbar from "./navbar/Navbar";
import {Link} from "react-scroll";


const Header = () => {

    return (
        <div className={style.header}>
            <Link className={style.btnProfile} to='section-1' spy={true}
                  smooth={true} offset={-70} duration={500}>Profile</Link>
            <Navbar/>
        </div>
    );
};

export default Header;
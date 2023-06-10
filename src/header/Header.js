import React, {useEffect, useState} from 'react';
import style from './Header.module.scss';
import Navbar from "./navbar/Navbar";
import {Link} from "react-scroll";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const header = document.querySelector(`.${style.header}`);
    if (header && scrollTop > header.offsetHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <div className={style.header}>
      <Link className={style.btnProfile} to='section-1' spy={true}
            smooth={true} offset={-70} duration={500}>Profile</Link>
      <Navbar/>
    </div>
  );
};

export default Header;
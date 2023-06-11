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
    <div className={style.header}
         style={{
      transition: 'all 0.3s ease-in-out',
      backgroundColor: isScrolled ? '#fff' : 'transparent',
      boxShadow: isScrolled ? '0px 2px 5px rgba(0, 0, 0, 0.25)' : 'none'
    }}>



      <Link className={style.btnProfile} to='section-1' spy={true}
            smooth={true} offset={-70} duration={500}
            style={{
              color: isScrolled ? '#222' : '#fff',
            }}
      >Profile</Link>
      <Navbar isScrolled={isScrolled}/>
    </div>
  );
};

export default Header;
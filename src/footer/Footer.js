import React from 'react';
import style from './Footer.module.css'
import FooterNav from "./FooterNav";
import {faLinkedin, faInstagramSquare, faGithubSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className={style.footer}>
            <span className={style.rightText}>All rights reserved © Profile 2023</span>
            <div className={style.footerNav}>
                <div className={style.wrap}>
                    <FooterNav icon={faFacebookSquare} href={'https://www.facebook.com/anna.slivankova'}/>
                    <FooterNav icon={faInstagramSquare} href={'https://www.instagram.com/anna_slivankova'}/>
                    <FooterNav icon={faLinkedin} href={'https://www.linkedin.com/in/anna-slivankova-ba969a156'}/>
                    <FooterNav icon={faGithubSquare} href={'https://github.com/AnnaSlivankova'}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
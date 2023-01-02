import React from 'react';
import style from './Footer.module.css'
import FooterNav from "./FooterNav";

const Footer = () => {
    return (
        <div className={style.footer}>
            <h6>Hanna Alexander Slivankova</h6>

            <div className={style.footerNav}>
                <div className={style.wrap}>
                    <FooterNav title={'1'}/>
                    <FooterNav title={'2'}/>
                    <FooterNav title={'3'}/>
                    <FooterNav title={'4'}/>
                </div>
            </div>
            <h6>All rights reserved © Portfolio 2023</h6>
        </div>
    );
};

export default Footer;
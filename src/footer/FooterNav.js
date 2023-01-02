import React from 'react';
import style from './FooterNav.module.css'

const FooterNav = (props) => {
    return (
        <div>
            <div className={style.navContainer}>
                <div className={style.navContainer}>
                    <a className={style.link} href="#/">{props.title}</a>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
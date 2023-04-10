import React from 'react';
import style from './FooterNav.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const FooterNav = (props) => {
    return (
        <div className={style.navContainer}>
            <a href={props.href} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={props.icon} size='3x' color='#109af7' className={style.link}/>
            </a>
        </div>
    );
};

export default FooterNav;
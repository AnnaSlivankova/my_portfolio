import React from 'react';
import style from './FooterNav.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";


const FooterNav = (props) => {
    return (
        <div>
            <div className={style.navContainer}>
                <div className={style.navContainer}>
                    <a href={props.href} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={props.icon} size='3x' color='#109af7' className={style.link}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
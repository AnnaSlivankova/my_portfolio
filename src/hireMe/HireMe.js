import React from 'react';
import style from './HireMe.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import { Link } from "react-scroll";

const HireMe = () => {

    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <div className={style.titleContainer}>
                    <h2 className={style.title}>I am currently available for Work</h2>
                </div>
                <div className={style.buttonContainer}>
                    <Link className={style.button} to='section-5' spy={true} smooth={true} offset={-70} duration= {500}>Hire Me</Link>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
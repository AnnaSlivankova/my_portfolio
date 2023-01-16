import React from 'react';
import style from './HireMe.module.css'
import styleContainer from "../common/styles/Container.module.css";

const HireMe = () => {
    const handleScrollContacts = () => {
        const element = document.getElementById('section-5');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <div className={style.titleContainer}>
                    <h2 className={style.title}>I am currently available for Work</h2>
                </div>
                <div className={style.buttonContainer}>
                    <a className={style.button} onClick={handleScrollContacts}>Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
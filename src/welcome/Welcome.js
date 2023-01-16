import React from 'react';
import style from './Welcome.module.css';
import styleContainer from '../common/styles/Container.module.css'
import TypewriterComponent from "typewriter-effect";

const Welcome = () => {
    const handleScrollAbout = () => {
        const element = document.getElementById('section-2');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
    return (
        <div id='section-1' className={style.welcomeBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.textContainer}>
                    <div className={style.firstTitle}>Welcome to my site!</div>
                    <div className={style.secondTitle}>
                        <TypewriterComponent
                            options={{
                                strings: ["Hi, I am Hanna A. Slivankova", "I am a Front-End Developer"/*, "I have 1 year experience"*/, "I am very hard worker"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <a className={style.button} href="#/" onClick={handleScrollAbout}>More about me</a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
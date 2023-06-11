import React from 'react';
import style from './Welcome.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import TypewriterComponent from "typewriter-effect";
import {Link} from "react-scroll";

const Welcome = () => {

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
                    <Link className={style.button} to='section-2' spy={true}
                          smooth={true} offset={-70} duration={500}>More about me</Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
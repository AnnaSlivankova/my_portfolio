import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import picImg from '../assets/image/me.jpg';
import cv from '../assets/Resume.pdf'

const Main = () => {
    const pic = {
        backgroundImage: `url(${picImg})`,
    }

    return (
        <div id='section-2' className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Title title={'About me'}/>
                <h3 className={style.h3}>this is my portfolio</h3>
                <div className={style.a}>
                    <div className={style.pic} style={pic}></div>
                    <div>
                        <div className={style.text}>
                            <h3 className={style.nameText}>Hanna Alexander Slivankova</h3>
                            <h4 className={style.h4}>Front End Developer</h4>
                            <p className={style.p}>Hello, I am a person who has a strong
                                passion for programming.
                                I have experience in creating SPA
                                with React/Redux/TypeScript.
                                Now I am improving my skills in this
                                direction and expanding them with
                                new technologies.</p>
                            <p className={style.p}>I'm planning to
                                study Node.js because my next focus
                                is to become a Full-Stack Developer.
                                And also I have an interest in
                                boosting my English to C1 level.
                                I spend my leisure time on Codewars
                                or speaking with native English
                                speakers.
                                Open to your suggestions.</p>
                        </div>
                        <a className={style.button} href={cv} target="_blank" rel="noreferrer">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
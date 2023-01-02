import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>this is my portfolio</span>
                    <h1>Hi, I am Hanna</h1>
                    <p>I am a Front-End Developer</p>
                    <a>More about me</a>
                </div>
                <div className={style.pic}></div>
            </div>
        </div>
    );
};

export default Main;
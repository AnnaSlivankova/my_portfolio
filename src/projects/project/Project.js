import React from 'react';
import style from './Project.module.scss';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.imgContainer}>
                <a className={style.link} href="#/" target="_blank" rel="noreferrer">show more</a>
            </div>
            <div className={style.projectInfo}>
            <h4 className={style.title}>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;
import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import {ProjectsBlock} from "./projectBlock/ProjectsBlock";

export const Projects = () => {
    return (
        <div id='section-4' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <ProjectsBlock/>
                </div>
            </div>
        </div>
    );
};
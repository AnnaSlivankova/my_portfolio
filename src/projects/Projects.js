import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Counter'} description={'bla bla'}/>
                    <Project title={'TODO-list'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                    <Project title={'Social network'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                    <Project title={'Library'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;
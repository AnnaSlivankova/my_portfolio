import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import tdlImg from '../assets/image/2.jpg'
import snImg from '../assets/image/1.jpg'
import libImg from '../assets/image/5.jpg'

const Projects = () => {
    const tdl = {
        backgroundImage: `url(${tdlImg})`,
    }

    const sn = {
        backgroundImage: `url(${snImg})`,
    }

    const lib = {
        backgroundImage: `url(${libImg})`,
    }

    return (
        <div  id='section-4' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project style={tdl} title={'TODO-list'} description={'React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests ...in progress'}/>
                    <Project style={sn} title={'Social network'} description={'...in progress'}/>
                    <Project style={lib} title={'Library'} description={'...in progress'}/>
                    <Project style={lib} title={'Counter'} description={'My first project with React/Redux/TS. I left it here as a memory. ...in progress'}/>
                    <Project style={lib} title={'Future project'} description={'...in progress'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
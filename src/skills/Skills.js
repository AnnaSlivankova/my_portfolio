import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from "../common/components/title/Title";
import {SkillCircle} from "./skillCircle/SkillCircle";


const Skills = () => {
    return (
        <div id='section-3' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <SkillCircle value={75} title={'JAVASCRIPT|REACT|REDUX'} description={'JavaScript, TypeScript, React, Redux, Redux Toolkit, Redux Thunks etc'}/>
                    <SkillCircle value={69} title={'AJAX|REST API'} description={'AJAX requests, interaction with REST API, AXIOS library, formik etc'}/>
                    <SkillCircle value={88} title={'TESTING'} description={'Unit Tests, StoryBook, SnapShoot etc'}/>
                    <SkillCircle value={87} title={'HTML5|CSS3'} description={'Semantic HTML-markup, preprocessors Sass|Less, Flex, Grid etc'}/>
                    <SkillCircle value={87} title={'Design'} description={'Material UI, Ant Design, TailwindCSS etc'}/>
                    <SkillCircle value={95} title={'FOUNDATION'} description={'English level - C, GIT etc'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                    <Skill title={'HTML'} description={'bla bla'}/>
                    <Skill title={'CSS'} description={'bla bla'}/>
                    <Skill title={'React'} description={'bla bla'}/>
                    <Skill title={'Redux'} description={'bla bla'}/>
                    <Skill title={'GIT'} description={'bla bla'}/>

                </div>
            </div>
        </div>
    );
};

export default Skills;
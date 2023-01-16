import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
// import {faHtml5, faCss3Alt, faJsSquare, faReact, faGitSquare} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faGem, faLaptopCode, faTasks} from "@fortawesome/free-solid-svg-icons";


const Skills = () => {
    return (
        <div id='section-3' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h2 className={style.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill icon={faLaptopCode} title={'Development'} description={'React, Redux, AXIOS etc'}/>
                    <Skill icon={faBriefcase}  title={'Foundation'} description={'JavaScript, TypeScript, HTML5, CSS3, GIT, English-C'}/>
                    <Skill icon={faTasks} title={'Testing'} description={'Unit Tests, SnapShot, Storybook'}/>
                    <Skill icon={faGem}  title={'Design'} description={'Material UI, TailwindCSS etc'}/>

                </div>
            </div>
        </div>
    );
};

export default Skills;
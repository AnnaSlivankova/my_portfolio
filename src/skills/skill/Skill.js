import React from 'react';
import style from './Skill.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skill = (props) => {
    return (
        <div className={style.skill}>
            {/*<div className={style.icon}></div>*/}

            <FontAwesomeIcon icon={props.icon} size='3x' color='#109af7' className={style.icon}/>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;
import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>My contacts</h2>
                <form className={style.contacts}>
                    <input className={style.input} placeholder={'Name'} type={"text"}/>
                    <input className={style.input} placeholder={'Phone number'} type={"text"}/>
                    <textarea className={style.textarea} placeholder={'Your text here'}></textarea>
                    <button className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
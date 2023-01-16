import React, {useState} from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";


const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const submit = () => {
        if (name && email && phone && message) {
            const serviceId = "service_lwdnae4";
            const templateId = "template_ve2ner8";
            const userId = "Q0hrJ6j-2wkkQvsoS";
            const templateParams = {
                name,
                email,
                phone,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));


            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
            setEmailSent(true)
        } else {
            alert('Please fill in all fields.')
        }
    }
    // const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };


    return (
        <div id='section-5' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact me'}/>
                <div>
                    <div className={style.info}>
                        <h4 className={style.smallTitle}>Details</h4>
                        <p></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} size='1x' color='#ddd'/><i className={style.i}></i>Minsk, Belarus</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} size='1x' color='#ddd'/><i className={style.i}></i>+375 (25) 992 45 52</p>
                        <p><FontAwesomeIcon icon={faEnvelope} size='1x' color='#ddd'/><i className={style.i}></i>annslivankova@gmail.com</p>
                    </div>
                </div>

                <div className={style.contacts}>
                    <input placeholder={'Your Name'} type={"text"} value={name}
                           onChange={e => setName(e.target.value)}/>
                    <input placeholder={'Your Email'} type={"text"} value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <input placeholder={'Your Phone'} type={"text"} value={phone}
                           onChange={e => setPhone(e.target.value)}/>
                    <textarea placeholder={'Your Message'} className={style.textarea} value={message}
                              onChange={e => setMessage(e.target.value)}></textarea>
                    <button className={style.button} type={"submit"} onClick={submit}>Send message</button>
                    {/*<span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>*/}
                </div>
            </div>
        </div>
    );
};

export default Contacts;
import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/title/Title";
import {ContactForm} from "./contactForm/ContactForm";
import {FormControl, FormLabel, Grid} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
  return (
    <div id='section-5' className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title title={'Contact me'}/>
        <Grid container justifyContent={'center'}>
          <Grid item justifyContent={'center'}>
            <FormControl style={{maxWidth: '700px'}}>
              <FormLabel>
                <h4 className={style.smallTitle}>Details</h4>
                <p className={style.textarea}>
                  You can contact me by phone, indicated in the contact information or by using the
                  contact form below. A few minutes after sending the message you will receive an
                  email
                  that your message has been received.
                </p>
                <p className={style.textarea}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' color='#ddd'/>
                  <i className={style.i}></i>
                  Minsk, Belarus
                </p>
                <p className={style.textarea}>
                  <FontAwesomeIcon icon={faMobileAlt} size='1x' color='#ddd'/>
                  <i className={style.i}></i>
                  +375 (25) 992 45 52
                </p>
                <p className={style.textarea}>
                  <FontAwesomeIcon icon={faEnvelope} size='1x' color='#ddd'/>
                  <i className={style.i}></i>
                  annslivankova@gmail.com
                </p>
              </FormLabel>
              <ContactForm/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
import React, {useState} from 'react';
import style from '../ContactForm.module.scss'
import {FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useFormik} from "formik";
import {MuiTelInput} from "mui-tel-input";


export const ContactForm1 = () => {
  const [value, setValue] = useState('')
  const onChangeHandler = (e) => {
    setValue(e.currentTarget.value)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate: (values) => {
      const errors = {}
      if (!values.name.length) {
        errors.name = 'Required'
      } else if (!/^[A-ZА-Я ]{2,30}$/i.test(values.name)) {
        errors.name = 'Check this field'
      }

      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      // if (!values.phone.length) {
      //     errors.phone = 'Required'
      // } else if (!/^\+375?([1234579]{2})\)?[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})$/.test(values.phone)) {
      //     errors.phone = 'Invalid phone number, enter your phone number in this format: +375 XX XXX XX XX please'
      // }

      if (!values.message.length) {
        errors.message = 'Required'
      }
      return errors
    },
    onSubmit: values => {
      // dispatch(loginTC(values))
      alert('your message was successfully sent')
      formik.resetForm()
    },
  })


  return (
    <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
        <FormControl style={{maxWidth: '700px'}}>
          <FormLabel>
            <h4 className={style.smallTitle}>Details</h4>
            <p className={style.textarea}>
              You can contact me by phone, indicated in the contact information or by using the
              contact form below. A few minutes after sending the message you will receive an email
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
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextField label="Your name"
                         margin="normal"
                         name="name"
                         onChange={formik.handleChange}
                         value={formik.values.name}
                         onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{color: 'white'}}>{formik.errors.name}</div>) : null}
              <TextField label="Your email"
                         margin="normal"
                         name="email"
                         onChange={formik.handleChange}
                         value={formik.values.email}
                         onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{color: 'white'}}>{formik.errors.email}</div>) : null}

              {/*<TextField label="Your phone number"*/}
              {/*           margin="normal"*/}
              {/*           name="phone"*/}
              {/*           onChange={formik.handleChange}*/}
              {/*           value={formik.values.phone}*/}
              {/*           onBlur={formik.handleBlur}*/}
              {/*/>*/}

              <MuiTelInput
                label="Your phone number"
                margin="normal"
                name="phone"
                defaultCountry="BY"
                onlyCountries={["BY", "RU", "LT", "PL"]}
                value={formik.values}
                onChange={formik.handleChange}
                // value={value}
                // onChange={onChangeHandler}
                // onChange={formik.handleChange}
                // value={formik.values.phone}
                // onBlur={formik.handleBlur}
              />


              {formik.touched.phone && formik.errors.phone &&
                <div style={{color: 'white'}}>{formik.errors.phone}</div>}

              <TextField label="Your message"
                         margin="normal"
                         name="message"
                         multiline
                         rows={5}
                         onChange={formik.handleChange}
                         value={formik.values.message}
                         onBlur={formik.handleBlur}
                         className={style.textarea}
              />
              {formik.touched.message && formik.errors.message &&
                <div style={{color: 'white'}}>{formik.errors.message}</div>}

              <div className={style.btn}>
                <button className={style.button} style={{maxWidth: '200px', marginTop: '20px'}}
                        type={'submit'}>Send message
                </button>
              </div>
            </FormGroup>
          </form>
        </FormControl>
      </Grid>
    </Grid>
  )
    ;
};


import {useForm, Controller} from "react-hook-form";
import { CircularProgress, TextField} from "@mui/material";
import {matchIsValidTel, MuiTelInput} from "mui-tel-input";
import style from "./ContactForm.module.scss";
import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import {SnackBar} from "../../common/components/SnackBar/SnackBar";

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#0072ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

const CustomMuiTelInput = styled(MuiTelInput)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#0072ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

export const ContactForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)
  const [severity, setSeverity] = useState('success');


  const {register, control, handleSubmit, reset, formState: {errors}} = useForm({
    defaultValues: {
      name: '',
      email: "",
      phone: "",
      message: "",
    }
  });

  const onSubmit = async (data) => {
    setIsSent(true)
    try {
      const res = await emailjs.send('service_lwdnae4', 'template_ve2ner8', {...data}, 'Q0hrJ6j-2wkkQvsoS')
      setSeverity('success')
      reset()
    } catch (e) {
      setSeverity('error')
    } finally {
      setIsSent(false)
      setIsSnackBarOpen(true)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.com}>
        <CustomTextField
          {...register('name', {required: true, maxLength: 30, pattern: /^[A-ZА-Я-. ]+$/i})}
          label="Your name"
          margin="normal"
          fullWidth
          variant="outlined"
        />
        {errors.name && <div style={{color: 'red'}}>This field is required</div>}

        <CustomTextField
          {...register('email', {required: true, pattern: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i})}
          label="Your email"
          margin="normal"
          fullWidth
          variant="outlined"
        />
        {errors.email && <div style={{color: 'red'}}>Invalided email, check this field</div>}
        <Controller
          name="phone"
          control={control}
          rules={{validate: matchIsValidTel}}
          render={({field, fieldState}) => (

            <CustomMuiTelInput
              {...field}
              label="Your phone number"
              margin="normal"
              defaultCountry="BY"
              onlyCountries={["BY", "RU", "LT", "PL"]}
              error={fieldState.invalid}
              fullWidth
              className={style.telInput}
            />
          )}
        />
        {errors.phone && <div style={{color: 'red'}}>Invalided phone number, check this field</div>}

        <CustomTextField
          {...register('message', {required: true, maxLength: 500})}
          label="Your message"
          margin="normal"
          fullWidth
          multiline
          rows={6}
          variant="outlined"
        />
        {errors.message && <div style={{color: 'red'}}>This field is required</div>}

        {isSent ?
          <CircularProgress color='secondary' size={45} sx={{marginTop: '20px'}}/>
          : (
            <div className={style.btn}>
              <button className={style.button} style={{maxWidth: '200px', marginTop: '20px'}}
                      type={'submit'}>Send message
              </button>
            </div>
          )}
      </form>
      <SnackBar isOpen={isSnackBarOpen} severity={severity} callback={setIsSnackBarOpen}/>
    </>
  )
};

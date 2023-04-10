import { useForm, Controller } from "react-hook-form";
import {TextField} from "@mui/material";
import {matchIsValidTel, MuiTelInput} from "mui-tel-input";
import style from "./ContactForm.module.scss";
import React from "react";

export const ContactForm = () => {
  const {register, control, handleSubmit, reset, formState: {errors}} = useForm({
    defaultValues: {
      name: '',
      email: "",
      tel: "",
      message: "",
    }
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        {...register('name', {required: true, maxLength: 30, pattern: /^[A-ZА-Я ]+$/i})}
        label="Your name"
        margin="normal"
        fullWidth
        variant="outlined"
        // style={{margin: '24px 0 12px 0'}}
      />
      {errors.name && 'This field is required'}

      <TextField
        {...register('email', {required: true, pattern: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i})}
        label="Your email"
        margin="normal"
        fullWidth
        variant="outlined"
        // style={{ margin: '24px 0 12px 0' }}
      />
      {errors.email && 'Invalided email, check this field'}
      <Controller
        name="tel"
        control={control}
        rules={{validate: matchIsValidTel}}
        render={({field, fieldState}) => (
<>
          <MuiTelInput
            {...field}
            // onBlur={field.onBlur}

            label="Your phone number"
            margin="normal"
            defaultCountry="BY"
            onlyCountries={["BY", "RU", "LT", "PL"]}
            helperText={fieldState.invalid ? "Tel is invalid" : ""}
            error={fieldState.invalid}
            fullWidth
          />
          {/*<p>{formState.isSubmitted ? "submitted" : ""}</p>*/}
          {/*<p>{fieldState.isTouched ? "touched" : ""}</p>*/}
</>
        )}
      />
      {errors.tel && 'This field is required'}

      <TextField
        {...register('message', {required: true, maxLength: 500})}
        label="Your message"
        margin="normal"
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        // style={{ margin: '24px 0 12px 0' }}
      />
      {errors.message && 'This field is required'}

      <div className={style.btn}>
        <button className={style.button} style={{maxWidth: '200px', marginTop: '20px'}}
                type={'submit'}>Send message
        </button>
      </div>
    </form>
  )
};

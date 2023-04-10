import React, {useState} from 'react';
import {useForm, Controller} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import  {MuiTelInput} from "mui-tel-input";
import PhoneInput from "react-phone-number-input";
import PhoneInputSt from 'react-phone-number-input/style.css'



export const ContactFormTwo = () => {
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

  const [value, setValue] = useState('')

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
      {errors.email && 'This field is required'}

      <PhoneInput
        {...register('email')}
        className='PhoneInputSt'
        placeholder="Enter phone number"
        defaultCountry='BY'
        withCountryCallingCode
        countryCallingCodeEditable={false}
        international={true}
        countries={["BY", "RU", "GB"]}
        // value={value}
        // onChange={setValue}
      />


      {/*<Controller*/}
      {/*  name="tel"*/}
      {/*  control={control}*/}
      {/*  // rules={{validate: matchIsValidTel}}*/}
      {/*  render={({field, fieldState}) => (*/}

      {/*    <MuiTelInput*/}
      {/*      {...field}*/}
      {/*      label="Your phone number"*/}
      {/*      margin="normal"*/}
      {/*      defaultCountry="BY"*/}
      {/*      onlyCountries={["BY", "RU", "LT", "PL"]}*/}
      {/*      helperText={fieldState.invalid ? "Tel is invalid" : ""}*/}
      {/*      error={fieldState.invalid}*/}
      {/*      fullWidth*/}
      {/*    />*/}
      {/*  )}*/}
      {/*/>*/}
      {/*{errors.tel && 'This field is required'}*/}
      <TextField
        {...register('message', {required: true, maxLength: 500})}
        label="Your message"
        margin="normal"
        fullWidth
        variant="outlined"
        // style={{ margin: '24px 0 12px 0' }}
      />
      {errors.message && 'This field is required'}



      <div>
        <Button type="submit" variant="contained" sx={{mt: 2}}>
          Submit
        </Button>
      </div>
    </form>
  )
}
import { TextField } from '@mui/material';
import validator from 'email-validator'
import React, { useState } from 'react'
import { setEmail } from '../../Reducs/userBockingSlice';
import { useDispatch, useSelector } from 'react-redux';

const EmailFilled = () => {
  const [isValid, setisValid] = useState(false)
  const Dispath = useDispatch();
  const state = useSelector((state) => state.userBocking)
console.log(state.bookDeatilse)
  const verifyConform = (value) => {
    if (!isValid == true) {
      Dispath(setEmail({ Email: value, isValid: !isValid }))
    }
  } 

  const validation = (e) => {

    setisValid(validator.validate(e.target.value));  //   isValid  = boolean
    verifyConform(e.target.value)

  }
  return (
    <>
      <TextField
        size="small"
        value={state?.Email?.Email}
        {...!isValid && { error: true }}
        id="filled-error"
        label="Email address"
        variant="filled"
        name="Email"
        onChange={validation}
      />
    </>
  )
}

export default EmailFilled

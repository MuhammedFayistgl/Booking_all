import React from 'react'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { useDispatch } from 'react-redux';
import { phone } from 'phone';
import { setPhonnumber } from '../../Reducs/userBockingSlice';

const PhoneNvalidation = () => {
    const Dispath = useDispatch();
    const [value, setValue] = React.useState('')
    const [isValid, setisValid] = React.useState(true)


    const verfiy = (value) => {
        let result = phone(value)
        setisValid(result.isValid)
        if (result.isValid) {
            Dispath(setPhonnumber(result))
        }
    }
    const handleChange = (newValue) => {
        verfiy(newValue)
        setValue(newValue)
        //  matchIsValidTel(value)  // boolean
    }
    return (
        <>
            <MuiTelInput id="filled-size-small"
                sx={{color:'white'}}
                {...!isValid && { error: true }}
                label="Mubil Number" variant="filled"  required value={value} onChange={handleChange} />
        </>
    )
}

export default PhoneNvalidation


// result = {
//     countryCode: "+91",
//     countryIso2: "IN",
//     countryIso3: "IND",
//     isValid: true,
//     phoneNumber: "+918658452398",
// }
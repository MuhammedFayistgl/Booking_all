import { FormControl, FormControlLabel, FormLabel,Radio, RadioGroup } from '@mui/material'
import React from 'react'

const Radio = () => {
  return (
    <>
          <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Are you travelling for work?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="travellingforwork"
                // value={formData.travellingforwork}
                // onChange={(e) =>
                //   setformData({
                //     ...formData,
                //     [e.target.name]: e.target.value,
                //   })
                // }
              >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
    </>
  )
}

export default Radio

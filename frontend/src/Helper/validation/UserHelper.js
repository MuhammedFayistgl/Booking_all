import axios from 'axios';

/** bocking user data uplode hear */

import { FormSummited } from "../../Reducs/DrowerSettings";

export const BockingHandler = (formdata,dispach) => {
  try {
     console.log("form submitted", formdata);
    axios.post('http://localhost:5000/user/bocking',{formdata}).then((response) => {
      console.log('server res ==',response);
    })
  } catch (error) {
    console.error(error)
  }
  // dispach(FormSummited(formdata))
 

  /** form validation */
};
export const emailconfomationHandler = (valOne, valTow) => {
  let val1 = valOne.toString();
  let val2 = valTow.toString();
  console.log("val1", val1);
  console.log("val2", val2);

  if (!valOne || !valTow) console.log("The object to be compared is empty");
  else if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

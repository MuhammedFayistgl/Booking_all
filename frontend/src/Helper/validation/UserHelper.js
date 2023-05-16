/** bocking user data uplode hear */

export const BockingHandler = (formdata) => {
  console.log("form submitted", formdata);

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

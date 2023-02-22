import React from "react";

import "./form.scss";

const Formcontainer = () => {
  return (
    <div>
      <div className="box-container fdc">Enter your details
      <div class="alert alert-success" role="alert">
        Almost done! Just fill in the <span>*</span> required info
      </div>
      <span>Are you travelling for work?</span>
      <div class="form-check df fdr">
       

        <form>
        <input name="checkbox" type="radio" value="yes" id="yes" />
        <label class="form-check-label" for="yes">
          Yse
        </label>
        <input name="checkbox" type="radio" value="no" id="no" />
        <label class="form-check-label" for="no">
          No
        </label>
       
          <ul class="form-style-1">
            <li>
              <label>
                Full Name <span class="required">*</span>
              </label>
              <input
                type="text"
                name="field1"
                class="field-divided"
                placeholder="First"
              />{" "}
              <input
                type="text"
                name="field2"
                class="field-divided"
                placeholder="Last"
              />
            </li>
            <li>
              <label>
              Email address <span class="required">*</span>
              </label>
              <input type="email" name="field3" class="field-long" />
            </li>
            <li>
              <label>
              Confirm email address  <span class="required">*</span>
              </label>
              <input type="email" name="field3" class="field-long" />
            </li>

            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Formcontainer;

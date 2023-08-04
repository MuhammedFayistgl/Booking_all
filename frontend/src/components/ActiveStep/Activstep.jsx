import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


const Activstep = () => {
  const State = useSelector((state) => state.SearchSlice);
  return (
    <> <Box sx={{ display: "flex", justifyContent: "center", position: "sticky", top: 0, zIndex: 999 }}>
      <Paper style={{ background: "white", width: "75%", padding: 5, marginBottom: 10 }}>
        <Stepper style={{ marginTop: 10, marginBottom: 4 }} activeStep={State.formSummit.status} alternativeLabel>
          <Step>
            <StepLabel>{"Ready to Bocking"}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{"CheckOut Date"}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{"Bocking Conformd"}</StepLabel>
          </Step>
        </Stepper>
      </Paper>
     
    </Box>
   
   
    </>
   
  );
};

export default Activstep;

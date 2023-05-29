import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { DrowerSetOpen } from "../../Reducs/DrowerSettings";
import { Typography } from "@mui/material";
import { Progress } from 'rsuite';
const Drower = () => {
  /**state */
  const state = useSelector((state) => state.DrowerSettings.DrowerOpen);

  const dispath = useDispatch();

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Drawer open={state} onClose={() => dispath(DrowerSetOpen(false))}>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>

      <Drawer open={state} onClose={() => dispath(DrowerSetOpen(false))}>
        <Drawer.Header>
          <Typography>Your Bocking Detials </Typography>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          
          <Progress.Line percent={80} showInfo={false} />
         
        </Drawer.Body>
      </Drawer>
    </div>
  );
};
export default Drower;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { Typography } from "@mui/material";
import { Progress } from "rsuite";
import { DrowerSetOpen } from "../../Reducs/userBockingSlice";

const Drower = () => {
  /**state */
  const state = useSelector((state) => state.userBocking?.DrowerOpen);

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
          <Typography>Your Bocking is confirmed </Typography>
          {/* <Box>

          </Box> */}
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

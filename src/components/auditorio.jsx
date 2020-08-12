import React from "react";
import ImageBackground from "./imageBackground";
import { Button, Typography, Container } from "@material-ui/core";

export const Auditorio = (props) => {
  return (
    <React.Fragment>
      <Container
        fixed
        style={{
          width: "1080px",
          height: "720px",
          backgroundColor: "#ebd234",
        }}
      >
        <Button>Regresar</Button>
        <Typography
          component="div"
          style={{
            width: "500px",
            height: "300px",
          }}
        >
          Play
        </Typography>
        <Button>Chat</Button>
      </Container>
    </React.Fragment>
  );
};

export default Auditorio;

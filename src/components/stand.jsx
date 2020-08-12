import ImageBackground from "./imageBackground";
import React, { Component } from "react";
import { Button, Typography, Container } from "@material-ui/core";

class Stand extends Component {
  state = {};
  render() {
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
          <Button>Play</Button>
          <Button>Chat</Button>
          <Button>PDFS</Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default Stand;

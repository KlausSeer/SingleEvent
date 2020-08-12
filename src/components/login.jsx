import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";

class Login extends Component {
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
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;

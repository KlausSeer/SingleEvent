import StandList from "./standList";
import React, { Component } from "react";
import { Button, Typography, Container } from "@material-ui/core";
class Showroom extends Component {
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
          <StandList></StandList>
        </Container>
      </React.Fragment>
    );
  }
}

export default Showroom;

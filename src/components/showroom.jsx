import StandList from "./standList";
import React, { Component } from "react";
import { Button, Typography, Container, Grid } from "@material-ui/core";
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
          <Grid container alignItem="center">
            <Grid item>
              <StandList></StandList>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Showroom;

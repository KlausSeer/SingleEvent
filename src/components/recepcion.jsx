import ImageBackground from "./imageBackground";
import React, { Component } from "react";
import { Button, Typography, Container, Grid } from "@material-ui/core";

class Recepcion extends Component {
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
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" alignItems="flex-start">
                <Grid item>
                  <Button>Auditorio</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignItems="flex-end">
                <Grid item>
                  <Button>Showroom</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Recepcion;

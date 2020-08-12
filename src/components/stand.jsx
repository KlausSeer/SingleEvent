import ImageBackground from "./imageBackground";
import React, { Component } from "react";
import { Button, Typography, Container, Grid } from "@material-ui/core";

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
          <Grid container direction="column" justify="space-evenly">
            <Grid item>
              <Button>
                <Typography variant="h4">Regresar</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Grid container justify="flex-end">
                <Button>
                  <Typography variant="h4">Play</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="center">
                <Button>
                  <Typography variant="h4">Chat</Typography>
                </Button>
              </Grid>{" "}
            </Grid>
            <Grid item>
              <Grid container justify="flex-end">
                <Button>
                  <Typography variant="h4">PDF</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Stand;

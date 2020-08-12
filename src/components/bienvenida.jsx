import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

export const Bienvenida = (props) => {
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
            <Typography variant="h1">Bienvenida</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Typography variant="h2">Logo</Typography>
              </Grid>
              <Grid item>
                <Button>
                  <Typography variant="h2">Ingresar</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container direction="column" justify="space-evenly">
        <Grid item>
          {" "}
          <Typography>Organizado por:</Typography>{" "}
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            <Grid item>
              <Button>
                <Typography>Logo</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <Typography>Logo</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Bienvenida;

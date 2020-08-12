import React from "react";
import { Button, Typography, Container, Grid } from "@material-ui/core";

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
        <Grid container>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button>Regresar</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography
                  component="div"
                  style={{
                    width: "500px",
                    height: "300px",
                  }}
                >
                  Play
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button>Chat</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Auditorio;

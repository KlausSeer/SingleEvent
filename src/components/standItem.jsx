import React, { Component } from "react";
import { Button, Typography } from "@material-ui/core";

class StandItem extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Button>
          <Typography>Soy un Stand</Typography>
        </Button>
      </React.Fragment>
    );
  }
}

export default StandItem;

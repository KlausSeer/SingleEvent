import React, { Component } from "react";
import StandItem from "./standItem";
import Grid from "./standItem";

class StandList extends Component {
  state = {
    stands: [{}, {}],
  };
  render() {
    return (
      <Grid cotainer justify="space-evenly">
        {this.state.stands.map((stand) => (
          <Grid item>
            <StandItem></StandItem>
          </Grid>
        ))}
        ;
      </Grid>
    );
  }
}

export default StandList;

import React, { Component } from "react";
import StandItem from "./standItem";

class StandList extends Component {
  state = {
    stands: [{}, {}],
  };
  render() {
    return this.state.stands.map((stand) => <StandItem></StandItem>);
  }
}

export default StandList;

import React from "react";
import ImageBackground from "./imageBackground";

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
        <h1>Bienvenida</h1>
      </Container>{" "}
    </React.Fragment>
  );
};

export default Bienvenida;

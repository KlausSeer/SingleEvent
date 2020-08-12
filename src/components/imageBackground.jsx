import React from "react";
import { Container } from "@material-ui/core";

export const ImageBackground = (props) => {
  return (
    <Container
      fixed
      style={{
        width: "1080px",
        height: "720px",
        backgroundColor: "#ebd234",
      }}
    >
      <h1>Bienvenida</h1>
    </Container>
  );
};

export default ImageBackground;

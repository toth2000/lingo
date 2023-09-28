import React from "react";
import { Container } from "./style";

const Card = ({ children, padding, gap, gapSm, widthSm, widthM, widthL }) => {
  return (
    <Container
      padding={padding}
      widthSm={widthSm}
      widthM={widthM}
      widthL={widthL}
      gap={gap}
      gapSm={gapSm}
    >
      {children}
    </Container>
  );
};

export default Card;

import React from "react";
import { Container, Loader, Text, Wrapper } from "./style";

const ProgressLoader = () => {
  return (
    <>
      {false ? (
        <Container>
          <Wrapper>
            <Loader></Loader>
            <Text>
              The backend server may take some time to boot for the first time
              as it is hosted on a free plan.
            </Text>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default ProgressLoader;

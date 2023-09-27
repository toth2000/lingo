import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    flex-direction: column-reverse;
    margin: 5% 0 0 0;
    align-items: center;
    gap: 25px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    flex-direction: row;
    margin: 2% 0 0 0;
    align-items: stretch;
    gap: 2%;
  }
`;

export const RightWrapper = styled.div``;

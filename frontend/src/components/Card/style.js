import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  padding: ${({ padding }) => padding};
  border-radius: 15px 15px 0 0;
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};
  box-shadow: 0px -2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    2px 0px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    0px 2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    -2px 0px ${({ theme: { colors } }) => colors.lingoGreen};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: ${({ widthSm }) => widthSm};
    flex-grow: 1;
    margin: 0 2%;
    gap: ${({ gapSm }) => (gapSm ? gapSm : "normal")};
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: ${({ widthM }) => widthM};
    gap: ${({ gap }) => (gap ? gap : "normal")};
    flex-grow: ${({ flexGrow }) => (flexGrow ? flexGrow : 0)};
    margin: 0;
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    width: ${({ widthL }) => widthL};
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 2%;
  gap: 15px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 3%;
  border-radius: 15px;
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  box-shadow: 0px -2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    2px 0px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    0px 2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    -2px 0px ${({ theme: { colors } }) => colors.lingoGreen};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: ${({ widthSm }) => widthSm};
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: ${({ widthM }) => widthM};
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    width: ${({ widthL }) => widthL};
  }
`;

export const AlignWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  margin: ${({ margin }) => (margin ? margin : 0)};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  gap: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
`;

export const SubHeading = styled.h2`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoOrange};
`;

export const Heading = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lingoGreen};
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  font-size: 1rem;
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

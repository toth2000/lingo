import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  display: flex;
  margin-top: 2px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 25px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    gap: 0;
  }
`;

export const LeftWrapper = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 60%;
  flex-grow: 1;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 90%;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 60%;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "auto")};
  gap: ${({ gap }) => (gap ? gap : "15px")};
`;

export const AlignWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  align-self: start;
`;

export const SubTitle = styled.h2`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoOrange};
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  font-size: 1rem;
  text-align: justify;
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const FeatureBox = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lingoLightGreen};
  border-radius: 15px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 80%;
    padding: 50px 35px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    padding: 8% 5%;
    width: 38%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 25%;
  margin: 2%;
  height: fit-content;
  padding: 8% 2%;
  border-radius: 15px;
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};
  box-shadow: 0px -2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    2px 0px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    0px 2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    -2px 0px ${({ theme: { colors } }) => colors.lingoGreen};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 75%;
    height: 80dvh;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 25%;
    height: 45dvh;
  }
`;

export const TextButton = styled.a`
  color: ${({ theme: { colors } }) => colors.lingoGreen};

  cursor: pointer;
  text-align: center;

  &:hover {
    color: ${({ theme: { colors } }) => colors.lingoBrown};
  }
`;

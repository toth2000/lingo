import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
  padding: 2% 5% 2% 2%;
  border-radius: 15px;
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    flex-direction: row;
    width: 85%;
    justify-content: space-around;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    flex-direction: column;
    width: auto;
  }
`;

export const FieldKeyText = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const FieldValueText = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoOrange};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

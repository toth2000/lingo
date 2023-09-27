import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  padding: 2%;
  border-radius: 15px 15px 0 0;
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};
  box-shadow: 0px -2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    2px 0px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    0px 2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    -2px 0px ${({ theme: { colors } }) => colors.lingoGreen};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 90%;
    flex-grow: 1;
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 45%;
    flex-grow: 0;
  }
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    width: 30%;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const QuestionText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
`;

export const ChoiceContainer = styled.div`
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 25px;
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: end;
`;

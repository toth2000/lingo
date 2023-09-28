import styled from "styled-components";

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

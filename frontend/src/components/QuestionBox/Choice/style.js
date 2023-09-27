import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5% 3.5%;
  border: 2px solid
    ${({ active, theme: { colors } }) =>
      active === true ? colors.lingoGreen : colors.lingoOrange};
  background-color: ${({ active, theme: { colors } }) =>
    active === true ? colors.lingoGreen : "transparent"};
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme: { colors } }) => colors.lingoGreen};
    background-color: ${({ theme: { colors } }) => colors.lingoGreen};
  }
`;

export const ChoiceText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
`;

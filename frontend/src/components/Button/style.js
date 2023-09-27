import styled from "styled-components";

export const Btn = styled.button`
  margin-top: 25px;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border-radius: 15px;
  background: ${({ type, theme: { colors } }) =>
    type === "outlined" ? "transparent" : colors.lingoOrange};
  border: 2px solid
    ${({ type, theme: { colors } }) =>
      type === "outlined" ? colors.lingoOrange : colors.lingoBrown};
  color: ${({ type, theme: { colors } }) =>
    type === "outlined" ? colors.lingoBrown : colors.lingoLightGrey};

  &:hover {
    background: ${({ type, theme: { colors } }) =>
      type === "outlined" ? colors.lingoOrange : "transparent"};
    border-color: ${({ type, theme: { colors } }) =>
      type === "filled" ? colors.lingoGreen : colors.lingoBrown};
    color: ${({ type, theme: { colors } }) =>
      type === "outlined" ? colors.lingoLightGrey : colors.lingoBrown};
  }
`;

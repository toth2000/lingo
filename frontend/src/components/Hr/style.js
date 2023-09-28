import styled from "styled-components";

export const HrElement = styled.hr`
  align: "center";
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  size: 1px;
  width: 100%;
  margin: 0;
`;

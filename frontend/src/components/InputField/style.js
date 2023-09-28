import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 15px;
  border: 2px solid black;
  padding: ${({ padding }) => (padding ? padding : "10px 15px;")};
`;

export const Input = styled.input`
  flex: 1;
  padding: 0 5%;
  background: transparent;
  border: none;
  margin-left: ${({ icon }) => (icon ? "15px" : "auto")};
  color: ${({ theme: { colors } }) => colors.textColorWhite};

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  height: 28px;
  width: 28px;
`;

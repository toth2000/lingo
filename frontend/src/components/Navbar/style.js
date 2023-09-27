import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  padding: 1% 3%;
  box-shadow: 0px 1px ${({ theme: { colors } }) => colors.lingoBrown};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
`;

export const Logo = styled.img`
  height: 48px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  height: 28px;
  cursor: pointer;
`;

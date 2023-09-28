import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-top: 2%;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
`;

export const SubTitle = styled.h2`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoOrange};
`;

export const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lingoGreen};
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  font-size: 1.2rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InstructionContainer = styled.div`
  display: ${({ visible }) => (visible === true ? "block" : "none")};
`;

export const AlignWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 28px;
  width: 28px;
  cursor: pointer;
`;

export const Hr = styled.hr`
  align: "center";
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  size: 1px;
  width: 100%;
  margin: 0;
`;

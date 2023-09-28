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

export const Text = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  font-size: 1.2rem;
`;

export const AlignWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 80%;
  margin: 0 10%;
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  gap: 10px;
`;

export const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lingoGreen};
`;

export const ListContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 25px;
`;

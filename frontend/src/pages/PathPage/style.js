import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 2px;
  padding: 3%;
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 90%;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    width: 45%;
  }
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

export const Select = styled.select`
  padding: 1% 7%;
  cursor: pointer;
`;

export const Option = styled.option`
  cursor: pointer;
  padding: 15px;
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

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
  margin-top: 2%;
  border-radius: 15px 15px 0 0;
  border: 2px solid ${({ theme: { colors } }) => colors.lingoBrown};
  background-color: ${({ theme: { colors } }) => colors.lingoWhite};
  box-shadow: 0px -2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    2px 0px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    0px 2px 5px ${({ theme: { colors } }) => colors.lingoGreen},
    -2px 0px ${({ theme: { colors } }) => colors.lingoGreen};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 85%;
    padding: 15px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    padding: 3%;
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    width: 35%;
  }
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
  gap: 10px;
`;

export const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lingoGreen};
`;

export const Select = styled.select`
  padding: 1% 7%;
  cursor: pointer;
`;

export const Option = styled.option`
  cursor: pointer;
  padding: 15px;
`;

export const Hr = styled.hr`
  align: "center";
  color: ${({ theme: { colors } }) => colors.lingoBrown};
  size: 1px;
  width: 100%;
  margin: 0;
`;

export const ListContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 25px;
`;

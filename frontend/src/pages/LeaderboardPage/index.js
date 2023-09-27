import React from "react";
import {
  AlignWrapper,
  Container,
  Hr,
  ListContainer,
  Option,
  Select,
  SubHeading,
  Text,
  Title,
  Wrapper,
} from "./style";
import Choice from "../../components/Choice";

const LeaderboardPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Leaderboard</Title>
        <Text>List of top 10 users with the highest score</Text>
        <Hr />
        <AlignWrapper>
          <SubHeading>Language: </SubHeading>
          <Select>
            <Option>Overall</Option>
            <Option>English</Option>
            <Option>Hindi</Option>
          </Select>
        </AlignWrapper>
        <Hr />
        <ListContainer>
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
        </ListContainer>
      </Wrapper>
    </Container>
  );
};

export default LeaderboardPage;

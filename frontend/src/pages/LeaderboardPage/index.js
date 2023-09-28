import React from "react";
import {
  AlignWrapper,
  Container,
  Hr,
  ListContainer,
  SubHeading,
  Text,
  Title,
} from "./style";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Selection from "../../components/Selection";

const LeaderboardPage = () => {
  return (
    <Container>
      <Card
        padding={"3%"}
        gap={"25px"}
        gapSm={"10px"}
        widthSm={"80%"}
        widthM={"60%"}
        widthL={"30%"}
      >
        <Title>Leaderboard</Title>
        <Text>List of top 10 users with the highest score</Text>
        <Hr />
        <AlignWrapper>
          <SubHeading>Language: </SubHeading>
          <Selection padding={"1% 7%"} />
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
      </Card>
    </Container>
  );
};

export default LeaderboardPage;

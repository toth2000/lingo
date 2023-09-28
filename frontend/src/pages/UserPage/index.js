import React from "react";
import {
  AlignWrapper,
  Container,
  Heading,
  LevelWrapper,
  SubHeading,
  Text,
  Title,
  UserContainer,
} from "./style";
import Card from "../../components/Card";
import Selection from "../../components/Selection";
import Choice from "../../components/Choice";

const UserPage = () => {
  return (
    <Container>
      <UserContainer widthL={"30%"} widthM={"50%"} widthSm={"90%"}>
        <Title>Tothagata Bhattacharjee</Title>
        <Text>Joined on: 14/08/2022</Text>
        <AlignWrapper>
          <Heading>Overall Score: </Heading>
          <SubHeading>150</SubHeading>
        </AlignWrapper>
        <AlignWrapper>
          <Heading>Preferred Language: </Heading>
          <Selection padding={"1% 7%"} />
        </AlignWrapper>
      </UserContainer>
      <Card
        padding={"3%"}
        gap={"20px"}
        gapSm={"15px"}
        widthL={"30%"}
        widthM={"50%"}
        widthSm={"90%"}
        flexGrow={1}
      >
        <Title>User Progress</Title>
        <AlignWrapper>
          <Heading>Language: </Heading>
          <Selection padding={"1% 7%"} />
        </AlignWrapper>

        <LevelWrapper>
          <Choice />
          <Choice />
          <Choice />
          <Choice />
        </LevelWrapper>
      </Card>
    </Container>
  );
};

export default UserPage;

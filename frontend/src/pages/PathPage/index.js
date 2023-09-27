import React, { useState } from "react";
import {
  AlignWrapper,
  Container,
  Hr,
  Icon,
  InnerWrapper,
  InstructionContainer,
  Option,
  Select,
  SubHeading,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "./style";
import Choice from "../../components/Choice";

import arrowDownIcon from "../../icons/arrow_down.png";
import arrowUpIcon from "../../icons/arrow_up.png";

const PathPage = () => {
  const [showInstruction, setShowInstruction] = useState(false);

  const handleShowInstructionClick = () => {
    setShowInstruction((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Title>Learning Path</Title>
          <Text>Choose a level from the list to start learning.</Text>
        </InnerWrapper>
        <Hr />
        <AlignWrapper>
          <SubTitle>Language: </SubTitle>
          <Select>
            <Option>English</Option>
            <Option>Hindi</Option>
          </Select>
        </AlignWrapper>
        <Hr />
        <InnerWrapper>
          <AlignWrapper>
            <SubTitle>Instructions: </SubTitle>
            <Icon
              src={showInstruction ? arrowUpIcon : arrowDownIcon}
              onClick={handleShowInstructionClick}
            />
          </AlignWrapper>
          <InstructionContainer visible={showInstruction}>
            <Text>
              Each level is a quiz that consists of 10 grammatical mcq
              questions. The question consists of three difficulty level.
            </Text>
            <Text>
              Each correct answer will be rewarded with a positive point
              depending on the question difficulty while points will be deducted
              for negative answer.
            </Text>
            <SubHeading>Correct answer scoring:</SubHeading>
            <Text>Easy : 5</Text>
            <Text>Medium: 15</Text>
            <Text>Hard: 15</Text>
            <SubHeading>Incorrect answer scoring:</SubHeading>
            <Text>
              For each incorrect answer 5 points will be deducted irrespective
              of the difficulty
            </Text>
            <SubHeading>Bonus scoring:</SubHeading>
            <Text>
              A bonus points will be added to the total points scored, it is
              calculated based on the remaining minutes left multipled by 2
            </Text>
          </InstructionContainer>
          <Hr />
        </InnerWrapper>
        <SubTitle>Levels: </SubTitle>
        <InnerWrapper>
          <Choice />
          <Choice />
          <Choice />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default PathPage;

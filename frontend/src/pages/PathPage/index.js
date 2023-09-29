import React, { useContext, useEffect, useState } from "react";
import {
  AlignWrapper,
  Container,
  Icon,
  InnerWrapper,
  InstructionContainer,
  SubHeading,
  SubTitle,
  Text,
  Title,
} from "./style";

import Choice from "../../components/Choice";

import arrowDownIcon from "../../icons/arrow_down.png";
import arrowUpIcon from "../../icons/arrow_up.png";
import Card from "../../components/Card";
import Selection from "../../components/Selection";
import Hr from "../../components/Hr";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, QUIZ_ROUTE } from "../../constant/routes";
import { AuthContext } from "../../context/AuthContext";
import { useLanguage } from "../../hooks/useLanguage";

const PathPage = () => {
  const [showInstruction, setShowInstruction] = useState(false);

  const { isUserAuthenticated } = useContext(AuthContext);
  const { option, selectedLanguage, handleOptionChange } = useLanguage();
  const navigate = useNavigate();
  const [level, setLevel] = useState([]);

  const handleShowInstructionClick = () => {
    setShowInstruction((prev) => !prev);
  };

  const handleLevelClick = (level) => {
    navigate(
      `${QUIZ_ROUTE}?level=${level + 1}&langauge=${selectedLanguage.code}`
    );
  };

  useEffect(() => {
    if (isUserAuthenticated() === false) {
      navigate(HOME_ROUTE);
      return;
    }
  }, []);

  useEffect(() => {
    const lvls = [];
    for (let i = 0; i < selectedLanguage?.lvls; i++) {
      lvls.push(`Level ${i + 1}`);
    }
    setLevel(lvls);
  }, [selectedLanguage]);

  return (
    <Container>
      <Card
        padding={"3%"}
        gap={"20px"}
        gapSm={"15px"}
        widthL={"35%"}
        widthM={"60%"}
        widthSm={"90%"}
      >
        <InnerWrapper>
          <Title>Learning Path</Title>
          <Text>Choose a level from the list to start learning.</Text>
        </InnerWrapper>
        <Hr />
        <AlignWrapper>
          <SubTitle>Language: </SubTitle>
          <Selection
            padding={"1% 7%"}
            onChange={handleOptionChange}
            optionList={option}
          />
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
          {level.map((item, indx) => (
            <Choice index={indx} onClick={handleLevelClick}>
              <Text>{item}</Text>
            </Choice>
          ))}
        </InnerWrapper>
      </Card>
    </Container>
  );
};

export default PathPage;

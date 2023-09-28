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
import { getLanguageList } from "../../api/language";
import { showErrorAlert } from "../../utils/api";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { QUIZ_ROUTE } from "../../constant/routes";

const PathPage = () => {
  const [showInstruction, setShowInstruction] = useState(false);

  const { setLoading } = useContext(AppContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [option, setOption] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [level, setLevel] = useState([]);

  const handleShowInstructionClick = () => {
    setShowInstruction((prev) => !prev);
  };

  const fetchLanguageList = async () => {
    try {
      setLoading(true);
      const { data } = await getLanguageList();

      if (!data) return;

      setData(data);
      const opt = data.map((item) => ({
        id: item._id,
        label: item.lang,
        value: item.code,
      }));
      setOption(opt);
      setSelectedLanguage(data[0]);
    } catch (error) {
      console.error("Fetch Langague List error: ", error);
      showErrorAlert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (event) => {
    const selected = data.find((item) => item.code === event.target.value);
    setSelectedLanguage(selected);
  };

  const handleLevelClick = (level) => {
    navigate(
      `${QUIZ_ROUTE}?level=${level + 1}&langauge=${selectedLanguage.code}`
    );
  };

  useEffect(() => {
    fetchLanguageList();
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

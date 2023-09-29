import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ChoiceContainer,
  DifficultyContainer,
  QuestionText,
  QuestionTextContainer,
} from "./style";
import Choice from "../Choice";
import Button from "../Button";
import Card from "../Card";

const QuestionBox = ({
  data,
  submitHandler,
  selectedChoice,
  handleChoiceOnClick,
}) => {
  const [difficulty, setDifficulty] = useState({
    text: "",
    color: "",
  });

  useEffect(() => {
    if (data?.diff !== undefined) {
      switch (data.diff) {
        case 0:
          setDifficulty({ ...difficulty, text: "Easy", color: "#ACC2A8" });
          break;
        case 1:
          setDifficulty({ ...difficulty, text: "Medium", color: "#FCD667" });
          break;
        case 2:
          setDifficulty({ ...difficulty, text: "Hard", color: "#ed4e4e" });
          break;

        default:
          setDifficulty({ ...difficulty, text: "", color: "" });
      }
    }
  }, [data]);

  return (
    <Card padding={"2%"} widthSm={"90%"} widthM={"45%"} widthL={"30%"}>
      <DifficultyContainer background={difficulty.color}>
        <QuestionText>{difficulty.text}</QuestionText>
      </DifficultyContainer>
      <QuestionTextContainer>
        <QuestionText>Q.</QuestionText>
        <QuestionText>{data?.ques}</QuestionText>
      </QuestionTextContainer>
      <ChoiceContainer>
        {data?.opt.map((item, indx) => (
          <Choice
            index={indx}
            showOrder={true}
            active={indx === selectedChoice ? true : false}
            onClick={handleChoiceOnClick}
          >
            <QuestionText>{item}</QuestionText>
          </Choice>
        ))}
      </ChoiceContainer>
      <ButtonContainer>
        <Button
          padding={"2.5% 3.5%"}
          text={"Submit"}
          type={"outlined"}
          width={"40%"}
          onClick={submitHandler}
        />
      </ButtonContainer>
    </Card>
  );
};

export default QuestionBox;

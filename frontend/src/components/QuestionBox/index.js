import React from "react";
import {
  ButtonContainer,
  ChoiceContainer,
  QuestionText,
  QuestionTextContainer,
} from "./style";
import Choice from "../Choice";
import Button from "../Button";
import Card from "../Card";

const QuestionBox = () => {
  return (
    <Card padding={"2%"} widthSm={"90%"} widthM={"45%"} widthL={"30%"}>
      <QuestionTextContainer>
        <QuestionText>Q.</QuestionText>
        <QuestionText>
          {"The doctor gave me a ______ for some medicine yesterday."}
        </QuestionText>
      </QuestionTextContainer>
      <ChoiceContainer>
        <Choice />
        <Choice />
        <Choice />
      </ChoiceContainer>
      <ButtonContainer>
        <Button
          padding={"2.5% 3.5%"}
          text={"Submit"}
          type={"outlined"}
          width={"40%"}
        />
      </ButtonContainer>
    </Card>
  );
};

export default QuestionBox;

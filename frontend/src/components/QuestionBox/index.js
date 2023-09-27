import React from "react";
import {
  ButtonContainer,
  ChoiceContainer,
  Container,
  QuestionText,
  QuestionTextContainer,
} from "./style";
import Choice from "./Choice";
import Button from "../Button";

const QuestionBox = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default QuestionBox;

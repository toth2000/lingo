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

const QuestionBox = ({
  data,
  submitHandler,
  selectedChoice,
  handleChoiceOnClick,
}) => {
  return (
    <Card padding={"2%"} widthSm={"90%"} widthM={"45%"} widthL={"30%"}>
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

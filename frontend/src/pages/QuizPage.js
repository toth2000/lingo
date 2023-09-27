import React from "react";
import QuestionBox from "../components/QuestionBox";
import { Container } from "./style";
import ScoreBox from "../components/ScoreBox";

const QuizPage = () => {
  return (
    <Container>
      <QuestionBox />
      <ScoreBox />
    </Container>
  );
};

export default QuizPage;

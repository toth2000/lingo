import React, {  useState } from "react";
import QuestionBox from "../../components/QuestionBox";
import { Container } from "./style";
import ScoreBox from "../../components/ScoreBox";
import { useWebSocket } from "../../hooks/useWebsocket";
import { QUIZ_SOCKET_URL } from "../../constant/socketUrl";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { HOME_ROUTE, LEARNING_PATH_ROUTE } from "../../constant/routes";

const QuizPage = () => {
  const [data, setData] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [connected, setConnected] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const [query] = new useSearchParams();

  const handleChoiceOnClick = (index) => {
    setSelectedChoice(index);
  };

  const navigate = useNavigate();

  const handleOnConnect = () => {
    setConnected(true);
  };

  const handleOnSocketMessage = (message) => {
    if (message?.type === "ques") {
      setData(message);
      setQuestionCount((prev) => prev + 1);
    } else if (message?.type === "end") {
      alert(
        `Quiz Over!!!\nScore: ${message.score}\nBonus: ${
          message.bonus
        }\nTotal: ${message.score + message.bonus}`
      );
      navigate(LEARNING_PATH_ROUTE);
    } else if (
      message?.type === "error" &&
      message.accessTokenExpired === true
    ) {
      navigate(HOME_ROUTE);
    }
  };

  const ws = useWebSocket(
    `${QUIZ_SOCKET_URL}?level=${query.get("level")}&lang=${query.get(
      "langauge"
    )}`,
    handleOnConnect,
    handleOnSocketMessage
  );

  const submitResponseHandler = () => {
    if (selectedChoice === null) {
      alert("Please select a choice to continue");
      return;
    }

    try {
      ws.current.send(JSON.stringify({ id: data?.id, ans: selectedChoice }));
      setSelectedChoice(null);
    } catch (error) {
      console.error("Quiz Send Handler: ", error);
    }
  };

  return (
    <Container>
      <QuestionBox
        data={data}
        submitHandler={submitResponseHandler}
        selectedChoice={selectedChoice}
        handleChoiceOnClick={handleChoiceOnClick}
      />
      <ScoreBox
        score={data?.score}
        question={questionCount}
        connected={connected}
      />
    </Container>
  );
};

export default QuizPage;

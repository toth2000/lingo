import { useEffect, useState } from "react";
import {
  Container,
  FieldKeyText,
  FieldValueText,
  TextContainer,
} from "./style";

const ScoreBox = ({ score, question, connected }) => {
  const [min, setMin] = useState("--");
  const [secs, setSecs] = useState("--");

  useEffect(() => {
    if (connected === false) {
      return;
    }

    let timeLeft = 15 * 60;

    const timer = setInterval(() => {
      timeLeft = timeLeft - 1;
      const min = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;

      if (min === 0 && secs === 0) {
        clearInterval(timer);
        setMin("00");
        setSecs("00");
        return;
      }

      if (min < 10) {
        setMin(`0${min}`);
      } else {
        setMin(min);
      }

      if (secs < 10) {
        setSecs(`0${secs}`);
      } else {
        setSecs(secs);
      }
    }, 1000);
  }, [connected]);

  return (
    <Container>
      <TextContainer>
        <FieldKeyText>Time</FieldKeyText>
        <FieldValueText>{`${min} : ${secs}`}</FieldValueText>
      </TextContainer>
      <TextContainer>
        <FieldKeyText>Score</FieldKeyText>
        <FieldValueText>{score}</FieldValueText>
      </TextContainer>
      <TextContainer>
        <FieldKeyText>Question</FieldKeyText>
        <FieldValueText>{question}/10</FieldValueText>
      </TextContainer>
    </Container>
  );
};

export default ScoreBox;

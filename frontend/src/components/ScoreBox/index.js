import { useEffect, useState } from "react";
import {
  Container,
  FieldKeyText,
  FieldValueText,
  TextContainer,
} from "./style";

const ScoreBox = () => {
  const [min, setMin] = useState("--");
  const [secs, setSecs] = useState("--");

  useEffect(() => {
    let timeLeft = 15 * 60;

    setInterval(() => {
      timeLeft = timeLeft - 1;
      const min = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;

      if (min === 0 && secs === 0) {
        alert("Time over!!!");
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
  }, []);

  return (
    <Container>
      <TextContainer>
        <FieldKeyText>Time</FieldKeyText>
        <FieldValueText>{`${min} : ${secs}`}</FieldValueText>
      </TextContainer>
      <TextContainer>
        <FieldKeyText>Score</FieldKeyText>
        <FieldValueText>5</FieldValueText>
      </TextContainer>
      <TextContainer>
        <FieldKeyText>Question</FieldKeyText>
        <FieldValueText>5/10</FieldValueText>
      </TextContainer>
    </Container>
  );
};

export default ScoreBox;

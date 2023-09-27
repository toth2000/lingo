import {
  Container,
  FieldKeyText,
  FieldValueText,
  TextContainer,
} from "./style";

const ScoreBox = () => {
  return (
    <Container>
      <TextContainer>
        <FieldKeyText>Time</FieldKeyText>
        <FieldValueText>13 : 00</FieldValueText>
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

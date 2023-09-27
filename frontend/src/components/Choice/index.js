import { ChoiceText, Container, TextContainer } from "./style";

const Choice = () => {
  return (
    <Container active={false}>
      <TextContainer>
        <ChoiceText> 1.</ChoiceText>
        <ChoiceText>an</ChoiceText>
      </TextContainer>
    </Container>
  );
};

export default Choice;

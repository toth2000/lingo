import { ChoiceText, Container, TextContainer } from "./style";

const Choice = ({ index, showOrder, children, active, onClick }) => {
  return (
    <Container active={active} onClick={() => onClick(index)}>
      <TextContainer>
        {showOrder ? <ChoiceText> {`${index + 1}.`}</ChoiceText> : null}
        {children}
      </TextContainer>
    </Container>
  );
};

export default Choice;

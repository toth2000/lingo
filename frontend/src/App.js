import Theme from "./Theme";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage";
import { Container, LowerWrapper, UpperWrapper } from "./style";

function App() {
  return (
    <Theme>
      <Container>
        <UpperWrapper>
          <Navbar />
        </UpperWrapper>
        <LowerWrapper>
          <QuizPage />
        </LowerWrapper>
      </Container>
    </Theme>
  );
}

export default App;

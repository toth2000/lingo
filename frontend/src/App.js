import { BrowserRouter, Routes, Route } from "react-router-dom";

import Theme from "./Theme";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage";
import { Container, LowerWrapper, UpperWrapper } from "./style";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Container>
          <UpperWrapper>
            <Navbar />
          </UpperWrapper>
          <LowerWrapper>
            <Routes>
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/path" element={<QuizPage />} />
            </Routes>
          </LowerWrapper>
        </Container>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

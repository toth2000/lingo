import { BrowserRouter, Routes, Route } from "react-router-dom";

import Theme from "./Theme";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage/index.js";
import { Container, LowerWrapper, UpperWrapper } from "./style";
import PathPage from "./pages/PathPage";
import LeaderboardPage from "./pages/LeaderboardPage";

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
              <Route path="/path" element={<PathPage />} />
              <Route path="/board" element={<LeaderboardPage />} />
            </Routes>
          </LowerWrapper>
        </Container>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

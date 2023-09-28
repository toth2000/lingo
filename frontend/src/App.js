import { BrowserRouter, Routes, Route } from "react-router-dom";

import Theme from "./Theme";
import Navbar from "./components/Navbar";
import QuizPage from "./pages/QuizPage/index.js";
import { Container, LowerWrapper, UpperWrapper } from "./style";

import PathPage from "./pages/PathPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import UserPage from "./pages/UserPage";
import LandingPage from "./pages/LandingPage";
import ProgressLoader from "./components/ProgressLoader";

import { AuthContext, useAuthContext } from "./context/AuthContext";
import { AppContext, useAppContext } from "./context/AppContext";

function App() {
  const { authState, setAuthData, getAuthData, deleteAuthData } =
    useAuthContext();
  const { appState, setLoading, isLoading } = useAppContext();
  return (
    <Theme>
      <AppContext.Provider value={{appState, setLoading, isLoading}}>
        <AuthContext.Provider
          value={{authState, setAuthData, getAuthData, deleteAuthData}}
        >
          <Container>
            <UpperWrapper>
              <Navbar />
            </UpperWrapper>
            <LowerWrapper>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/path" element={<PathPage />} />
                  <Route path="/board" element={<LeaderboardPage />} />
                  <Route path="/user/:id" element={<UserPage />} />
                </Routes>
              </BrowserRouter>
            </LowerWrapper>
          </Container>
          <ProgressLoader loading={isLoading()} />
        </AuthContext.Provider>
      </AppContext.Provider>
    </Theme>
  );
}

export default App;

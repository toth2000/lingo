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
import {
  HOME_ROUTE,
  LEADERBOARD_ROUTE,
  LEARNING_PATH_ROUTE,
  QUIZ_ROUTE,
  USER_ROUTE,
} from "./constant/routes";
import { WEBSITE_URL } from "./constant/url";

function App() {
  const authData = useAuthContext();
  const appData = useAppContext();
  return (
    <Theme>
      <AppContext.Provider value={appData}>
        <AuthContext.Provider value={authData}>
          <BrowserRouter
          // basename={WEBSITE_URL}
          >
            <Container>
              <UpperWrapper>
                <Navbar />
              </UpperWrapper>
              <LowerWrapper>
                <Routes>
                  <Route path={HOME_ROUTE} element={<LandingPage />} />
                  <Route path={QUIZ_ROUTE} element={<QuizPage />} />
                  <Route path={LEARNING_PATH_ROUTE} element={<PathPage />} />
                  <Route
                    path={LEADERBOARD_ROUTE}
                    element={<LeaderboardPage />}
                  />
                  <Route path={USER_ROUTE} element={<UserPage />} />
                </Routes>
              </LowerWrapper>
            </Container>
            <ProgressLoader />
          </BrowserRouter>
        </AuthContext.Provider>
      </AppContext.Provider>
    </Theme>
  );
}

export default App;

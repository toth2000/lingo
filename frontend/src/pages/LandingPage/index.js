import Button from "../../components/Button";
import Hr from "../../components/Hr";
import InputField from "../../components/InputField";
import {
  Container,
  InnerWrapper,
  LeftWrapper,
  RightWrapper,
  SubTitle,
  Text,
  TextButton,
  Title,
} from "./style";

import email_icon from "../../icons/email.png";
import password_icon from "../../icons/password.png";
import user_icon from "../../icons/user.png";
import { useContext, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { login, register } from "../../api/auth";
import { showErrorAlert } from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { LEARNING_PATH_ROUTE } from "../../constant/routes";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const navigate = useNavigate();
  const { setAuthData, isUserAuthenticated } = useContext(AuthContext);
  const { setLoading } = useContext(AppContext);
  const { state, handleInput, validateInputFields } = useInput({
    name: "",
    email: "",
    password: "",
  });

  const handleAuthentication = async () => {
    const apiCall = showLogin ? login : register;

    const isInputValid = showLogin
      ? validateInputFields(["email", "password"])
      : validateInputFields();

    if (isInputValid === false) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const { data } = await apiCall(state);
      setAuthData(data._id, data.accessToken, data.refreshToken);
      navigate(LEARNING_PATH_ROUTE);
    } catch (error) {
      console.error("Error in API Call: ", error);
      showErrorAlert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate(LEARNING_PATH_ROUTE);
    }
  }, []);

  return (
    <Container>
      <LeftWrapper>
        <Title>Lingo: Simply Learn</Title>

        <InnerWrapper>
          <SubTitle>Embark on a Multilingual Odyssey</SubTitle>
          <Text>
            Welcome to Lingo, your passport to the world of language learning.
            Our mission is simple: to make the journey of mastering multiple
            languages an enjoyable and enriching experience. With Lingo's
            innovative features, you'll find language learning to be more
            dynamic and rewarding than ever before.
          </Text>
        </InnerWrapper>

        <Hr />

        <InnerWrapper>
          <Title>Discover the essence of Lingo through:</Title>
          <InnerWrapper gap={"5px"}>
            <SubTitle>Dynamic Learning Experience</SubTitle>
            <Text>
              Lingo adapts to your language proficiency by adjusting question
              difficulty based on your responses, ensuring personalized and
              effective learning.
            </Text>
          </InnerWrapper>
          <InnerWrapper gap={"5px"}>
            <SubTitle>Engaging Scoring System</SubTitle>
            <Text>
              Stay motivated and challenged with our intriguing scoring system,
              earning points and achieving milestones as you progress.
            </Text>
          </InnerWrapper>
          <InnerWrapper gap={"5px"}>
            <SubTitle>Global Leaderboard</SubTitle>
            <Text>
              Compete with fellow language enthusiasts worldwide on our
              leaderboard, celebrating your achievements and global language
              skills.
            </Text>
          </InnerWrapper>
          <InnerWrapper gap={"5px"}>
            <SubTitle>Progress Tracking</SubTitle>
            <Text>
              Monitor your language learning journey closely, set achievable
              goals, and witness your fluency levels rise steadily.
            </Text>
          </InnerWrapper>
          <InnerWrapper gap={"5px"}>
            <SubTitle>Learn Multiple Languages</SubTitle>
            <Text>
              Lingo opens doors to a multitude of languages, allowing you to
              explore and master them with ease.
            </Text>
          </InnerWrapper>
        </InnerWrapper>

        <Hr />

        <InnerWrapper gap="5px">
          <Title>Join Lingo today</Title>
          <SubTitle>And</SubTitle>
          <Title>Embark on a captivating multilingual odyssey</Title>
        </InnerWrapper>
      </LeftWrapper>

      <RightWrapper>
        <Title>{showLogin ? "Login" : "Register"}</Title>
        <InnerWrapper width={"90%"}>
          {!showLogin ? (
            <InputField
              icon={user_icon}
              padding={"3%"}
              name={"name"}
              value={state.name}
              placeholder={"Full Name"}
              type={"text"}
              handleInputChange={handleInput}
            />
          ) : null}
          <InputField
            icon={email_icon}
            name={"email"}
            padding={"3%"}
            value={state.email}
            placeholder={"Email"}
            type={"text"}
            handleInputChange={handleInput}
          />
          <InputField
            icon={password_icon}
            name={"password"}
            value={state.password}
            padding={"3%"}
            placeholder={"Password"}
            type={"password"}
            handleInputChange={handleInput}
          />
          <Button
            onClick={handleAuthentication}
            padding={"4%"}
            text={"Submit"}
            type={"filled"}
            width={"100%"}
          />
          <TextButton onClick={() => setShowLogin((prev) => !prev)}>
            {showLogin
              ? "Don't have an account? Click here"
              : "Already have an account? Click Here"}
          </TextButton>
        </InnerWrapper>
      </RightWrapper>
    </Container>
  );
};

export default LandingPage;

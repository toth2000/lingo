import Button from "../../components/Button";
import Hr from "../../components/Hr";
import InputField from "../../components/InputField";
import {
  Container,
  FeatureBox,
  FeatureContainer,
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
import { features } from "../../constant/text";

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

        <Title>Discover the essence of Lingo through</Title>
        <FeatureContainer>
          {features.map((item) => (
            <FeatureBox key={item.id}>
              <InnerWrapper>
                <SubTitle>{item.title}</SubTitle>
                <Text>{item.text}</Text>
              </InnerWrapper>
            </FeatureBox>
          ))}
        </FeatureContainer>

        <Hr />

        <InnerWrapper gap="5px">
          <Title>Join Lingo today</Title>
          <Title>And</Title>
          <SubTitle>Embark on a captivating multilingual odyssey</SubTitle>
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

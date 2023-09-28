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
  Title,
} from "./style";

import email_icon from "../../icons/email.png";
import password_icon from "../../icons/password.png";
import user_icon from "../../icons/user.png";

const LandingPage = () => {
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
        <Title>Login</Title>
        <InnerWrapper width={"90%"}>
          <InputField
            icon={email_icon}
            padding={"3%"}
            placeholder={"Email"}
            type={"text"}
            handleInputChange={() => {}}
          />
          <InputField
            icon={password_icon}
            padding={"3%"}
            placeholder={"Password"}
            type={"password"}
            handleInputChange={() => {}}
          />
          <Button padding={"4%"} text={"Submit"} type={"filled"} width={"100%"}>
            Login
          </Button>
        </InnerWrapper>
      </RightWrapper>
    </Container>
  );
};

export default LandingPage;

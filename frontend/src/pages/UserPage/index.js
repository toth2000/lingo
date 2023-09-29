import React, { useContext, useEffect, useState } from "react";
import {
  AlignWrapper,
  Container,
  Heading,
  LevelWrapper,
  SubHeading,
  Text,
  Title,
  UserContainer,
} from "./style";
import Card from "../../components/Card";
import Selection from "../../components/Selection";
import Choice from "../../components/Choice";
import Button from "../../components/Button";
import { AppContext } from "../../context/AppContext";
import { getUserById } from "../../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { getStatisticById } from "../../api/statistic";
import { showErrorAlert } from "../../utils/api";
import { formatDate } from "../../utils/date";
import { useLanguage } from "../../hooks/useLanguage";
import { HOME_ROUTE, QUIZ_ROUTE } from "../../constant/routes";
import { AuthContext } from "../../context/AuthContext";

const UserPage = () => {
  const { setLoading } = useContext(AppContext);
  const { authState, deleteAuthData, isUserAuthenticated } =
    useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { option, selectedLanguage, handleOptionChange } = useLanguage();

  const [userData, setUserData] = useState(null);
  const [level, setLevel] = useState([]);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const userResponse = await getUserById(id);
      const statsResponse = await getStatisticById(id);

      if (!userResponse || !statsResponse) return;

      const data = { ...statsResponse.data, ...userResponse.data };

      setUserData({ ...data, createdAt: userResponse.data.createdAt });
    } catch (error) {
      console.error("Fetch Langague List error: ", error);
      showErrorAlert(error);
    } finally {
      setLoading(false);
    }
  };

  const handeLogout = () => {
    deleteAuthData();
    navigate(HOME_ROUTE);
  };

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  useEffect(() => {
    if (isUserAuthenticated() !== true) {
      navigate(HOME_ROUTE);
    }
  }, [authState]);

  const handleLevelClick = (level) => {
    navigate(
      `${QUIZ_ROUTE}?level=${level + 1}&langauge=${selectedLanguage.code}`
    );
  };

  useEffect(() => {
    const lvls = [];
    for (let i = 0; i < selectedLanguage?.lvls; i++) {
      const lvlDetails = userData?.level[selectedLanguage?.code]?.[i];

      lvls.push(
        <Choice index={i} onClick={handleLevelClick}>
          <AlignWrapper
            minWidth={"80%"}
            margin={"0 10%"}
            justify="space-between"
          >
            <Text>{`Level ${i + 1}`}</Text>
            <Text>
              {lvlDetails?.complete === true
                ? `Score: ${lvlDetails?.score}`
                : "Yet to complete"}
            </Text>
          </AlignWrapper>
        </Choice>
      );
    }
    setLevel(lvls);
  }, [selectedLanguage, userData]);

  return (
    <Container>
      <UserContainer widthL={"30%"} widthM={"50%"} widthSm={"90%"}>
        <Title>{userData?.name}</Title>
        <Text>Joined on: {formatDate(userData?.createdAt)}</Text>
        <AlignWrapper>
          <Heading>Overall Score: </Heading>
          <SubHeading>{userData?.points}</SubHeading>
        </AlignWrapper>
        {/* <AlignWrapper>
          <Heading>Preferred Language: </Heading>
          <Selection padding={"1% 7%"} />
        </AlignWrapper> */}
        {authState?.userId === id ? (
          <Button
            onClick={handeLogout}
            padding={"4%"}
            text={"Logout"}
            type={"filled"}
            width={"30%"}
          />
        ) : null}
      </UserContainer>
      <Card
        padding={"3%"}
        gap={"20px"}
        gapSm={"15px"}
        widthL={"30%"}
        widthM={"50%"}
        widthSm={"90%"}
        flexGrow={1}
      >
        <Title>User Progress</Title>

        <AlignWrapper>
          <Heading>Language: </Heading>
          <Selection
            padding={"1% 7%"}
            onChange={handleOptionChange}
            optionList={option}
          />
        </AlignWrapper>

        <LevelWrapper>{level.map((item) => item)}</LevelWrapper>
      </Card>
    </Container>
  );
};

export default UserPage;

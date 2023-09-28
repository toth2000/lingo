import React, { useContext, useEffect, useState } from "react";
import {
  AlignWrapper,
  Container,
  ListContainer,
  SubHeading,
  Text,
  Title,
} from "./style";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import Selection from "../../components/Selection";
import Hr from "../../components/Hr";
import { AppContext } from "../../context/AppContext";
import { getLeaderboard } from "../../api/leaderboard";
import { showErrorAlert } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE } from "../../constant/routes";

const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const { setLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const { data } = await getLeaderboard();

      if (!data) return;

      setLeaderboardData(data);
    } catch (error) {
      console.error("Fetch Langague List error: ", error);
      showErrorAlert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (userId) => {
    const route = USER_ROUTE.split(":");
    navigate(`${route[0]}${userId}`);
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <Container>
      <Card
        padding={"3%"}
        gap={"25px"}
        gapSm={"10px"}
        widthSm={"80%"}
        widthM={"60%"}
        widthL={"30%"}
      >
        <Title>Leaderboard</Title>
        <Text>List of top 10 users with the highest score</Text>
        <Hr />

        {/* <AlignWrapper>
          <SubHeading>Language: </SubHeading>
          <Selection padding={"1% 7%"} />
        </AlignWrapper>
        <Hr /> */}

        <ListContainer>
          {leaderboardData.map((item) => (
            <Choice key={item._id} index={item._id} onClick={handleClick}>
              <AlignWrapper justify="space-between">
                <Text>{item?.name}</Text>
                <Text>{item?.points}</Text>
              </AlignWrapper>
            </Choice>
          ))}
        </ListContainer>
      </Card>
    </Container>
  );
};

export default LeaderboardPage;

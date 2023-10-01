import { Container, Icon, Logo, Title, Wrapper } from "./style";

import githubIcon from "../../icons/github-icon.png";
import logo from "../../icons/logo-48.png";
import userIcon from "../../icons/user.png";
import trophyIcon from "../../icons/trophy.png";
import pathIcon from "../../icons/path.png";
import { Link } from "react-router-dom";
import { GITHUB_REPO_URL } from "../../constant/url";
import {
  HOME_ROUTE,
  LEADERBOARD_ROUTE,
  LEARNING_PATH_ROUTE,
  USER_ROUTE,
} from "../../constant/routes";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { authState } = useContext(AuthContext);

  const [userRoute, setUserRoute] = useState(HOME_ROUTE);

  useEffect(() => {
    if (authState?.userId) {
      const url = USER_ROUTE.split(":")[0];
      const userId = authState.userId;
      setUserRoute(`${url}${userId}`);
    } else {
      setUserRoute(HOME_ROUTE);
    }
  }, [authState]);

  return (
    <Container>
      <Link to={HOME_ROUTE} style={{ textDecoration: "none" }}>
        <Wrapper gap="8px">
          <Logo src={logo} />
          <Title>Lingo</Title>
        </Wrapper>
      </Link>
      <Wrapper gap="25px">
        <Link to={GITHUB_REPO_URL}>
          <Icon src={githubIcon} />
        </Link>
        <Link to={LEARNING_PATH_ROUTE}>
          <Icon src={pathIcon} />
        </Link>
        <Link to={LEADERBOARD_ROUTE}>
          <Icon src={trophyIcon} />
        </Link>
        <Link to={userRoute}>
          <Icon src={userIcon} />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

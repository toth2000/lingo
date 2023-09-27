import { Container, Icon, Logo, Title, Wrapper } from "./style";

import logo from "../../icons/logo-48.png";
import userIcon from "../../icons/user.png";
import trophyIcon from "../../icons/trophy.png";
import pathIcon from "../../icons/path.png";

const Navbar = () => {
  return (
    <Container>
      <Wrapper gap="8px">
        <Logo src={logo} />
        <Title>Lingo</Title>
      </Wrapper>
      <Wrapper gap="25px">
        <Icon src={pathIcon} />
        <Icon src={trophyIcon} />
        <Icon src={userIcon} />
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import { Flex } from "./styled/Common.styled";
import { Nav, NavItem } from "./styled/Nav.styled";

const Navbar = () => {
  return (
    <Nav>
      <Flex align="center" justify="space-around">
        <NavItem>
          <img src="/logo.png" alt="logo" height="50px" width="auto" />
        </NavItem>
        <NavItem>
          <h1>My watchlist</h1>
        </NavItem>
        <NavItem>
          <h3>Nav items links</h3>
        </NavItem>
      </Flex>
    </Nav>
  );
};

export default Navbar;

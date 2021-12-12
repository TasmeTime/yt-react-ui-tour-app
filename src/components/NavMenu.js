import styled from "styled-components";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import Colors from "../assets/Colors";

const NavMenuEl = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${Colors.Background};
  display: flex;
  z-index: 2;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.a`
  font-size: 1.8rem;
  color: ${(p) => (p.active ? Colors.NavActive : Colors.Disable)};
`;

export default function NavMenu() {
  return (
    <NavMenuEl>
      <NavItem href="#" active>
        <AiOutlineSearch />
      </NavItem>
      <NavItem href="#">
        <VscBookmark />
      </NavItem>
      <NavItem href="#">
        <AiOutlineUser />
      </NavItem>
    </NavMenuEl>
  );
}

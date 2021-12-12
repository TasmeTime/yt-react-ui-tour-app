import styled from "styled-components";
import { IoIosPin } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import H4 from "./styled/H4.styled";
import H5 from "./styled/H5.styled";
import Input from "./styled/Input.styled";
import bgImage from "../assets/images/forest2.jpg";
import Colors from "../assets/Colors";

const HomePageTopSectionEl = styled.section`
  min-height: 25%;
  background-image: url(${bgImage});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10%;
`;

const Search = styled.span`
  color: ${Colors.Gray};
  position: absolute;
  bottom: 0;
  display: flex;
  width: 85%;
  align-items: center;
  background-color: ${Colors.Background};
  border-radius: 30px;
  padding: 0.6rem 1rem;
  transform: translateY(50%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export default function HomePageTopSection(props) {
  return (
    <HomePageTopSectionEl>
      <H5 color={Colors.Background}>You location</H5>
      <H4 fontSize="1.5rem" fontWeight="500" color={Colors.Background}>
        <IoIosPin fontSize="1.1rem" /> Bali, Indonesia
      </H4>
      <Search>
        <AiOutlineSearch fontSize="1.2rem" />
        <Input fw noBorder placeholder="Search" />
      </Search>
    </HomePageTopSectionEl>
  );
}

import styled from "styled-components";
import { AiTwotoneStar } from "react-icons/ai";
import { VscChevronLeft, VscBookmark } from "react-icons/vsc";
import H2 from "./styled/H2.styled";
import Colors from "../assets/Colors";
import bgImage from "../assets/images/winterForest.jpg";
import P from "./styled/P.styled";
import { useNavigate } from "react-router-dom";

const InfoPageTopSectionEl = styled.section`
  background-image: url(${bgImage});
  background-size: cover;
  min-height: 55%;
  background-position: 16% 0;
`;

const TopMenu = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  color: ${Colors.Background};
  & > svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Background};
  margin-top: 15vh;
`;

export default function InfoPageTopSection() {
  const nav = useNavigate();
  return (
    <InfoPageTopSectionEl>
      <TopMenu>
        <VscChevronLeft
          onClick={() => {
            nav(-1);
          }}
        />
        <VscBookmark />
      </TopMenu>
      <Hero>
        <span>
          {[1, 2, 3, 4, 5].map((i) => {
            return <AiTwotoneStar key={i} />;
          })}
        </span>
        <H2>Best of Bali Waterfalls</H2>
        <P textAlign="center">
          Tibumana, Tukad Cepung and <br /> Tegenungan Waterfalls.
        </P>
      </Hero>
    </InfoPageTopSectionEl>
  );
}

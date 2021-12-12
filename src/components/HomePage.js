import styled from "styled-components";
import HomePageTopSection from "./HomePageTopSection";
import NavMenu from "./NavMenu";
import BigCarousell from "./styled/BigCarousell.styled";
import SmallCarousel from "./styled/SmallCarousel.styled";

const HomePageEl = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: 0;
  row-gap: 1.5rem;
  padding-top: 3rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function HomePage() {
  return (
    <HomePageEl>
      <HomePageTopSection />
      <Content>
        <BigCarousell title="Popular" />
        <SmallCarousel title="Categories" />
        <BigCarousell title="Recommend" />
      </Content>
      <NavMenu />
    </HomePageEl>
  );
}

import styled from "styled-components";
import Colors from "../assets/Colors";
import InfoPageTopSection from "./InfoPageTopSection";
import TabContainer from "./styled/TabContainer.styled";

const InfoPageEl = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  position: relative;
`;
const Content = styled.div`
  border-radius: 50px 50px 0 0;
  background-color: ${Colors.Background};
  overflow: auto;
  scrollbar-width: 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const TopBorder = styled.span`
  width: 100%;
  min-height: 1rem;
  background-color: ${Colors.Background};
  border-radius: 30px 30px 0 0;
  position: absolute;
  transform: translateY(-90%);
  z-index: 0;
`;

export default function InfoPage() {
  return (
    <InfoPageEl>
      <InfoPageTopSection />
      <Content>
        <TopBorder />
        <TabContainer />
      </Content>
    </InfoPageEl>
  );
}

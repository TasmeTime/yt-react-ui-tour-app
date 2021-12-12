import styled from "styled-components";
import Colors from "../../assets/Colors";
import InfoBar from "../InfoBar";
import OverviewTab from "../OverviewTab";

const TabContainerEl = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Border};
  padding: 0 1.5rem 0.5rem 1.5rem;
  z-index: 1;
  min-height: min-content;
`;
const Tab = styled.span`
  min-height: min-content;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;
const TabContent = styled.div`
  padding: 1rem 2rem;
  overflow: auto;
  flex: 1;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function TabContainer() {
  return (
    <TabContainerEl>
      <Tabs>
        <Tab>Overview</Tab>
        <Tab>Photo</Tab>
        <Tab>Reviews</Tab>
      </Tabs>
      <TabContent>
        <OverviewTab />
      </TabContent>
      <InfoBar />
    </TabContainerEl>
  );
}

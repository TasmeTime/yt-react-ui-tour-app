import styled from "styled-components";
import Colors from "../../assets/Colors";
import BCItem from "./BCItem.styled";
import H3 from "./H3.styled";

const BigCarousellEl = styled.div`
  padding: 0 0 0 1rem;
  min-height: min-content;
`;

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const SeeAll = styled.a`
  color: ${Colors.Primary};
  font-weight: 600;
`;

const ItemList = styled.div`
  display: flex;
  margin-top: 1rem;
  column-gap: 1rem;
  overflow-x: scroll;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function BigCarousell({ title }) {
  return (
    <BigCarousellEl>
      <TitleContainer>
        <H3>{title}</H3>
        <SeeAll href="#">See all</SeeAll>
      </TitleContainer>
      <ItemList>
        <BCItem />
        <BCItem />
        <BCItem />
      </ItemList>
    </BigCarousellEl>
  );
}

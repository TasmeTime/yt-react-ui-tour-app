import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import bgImage from "../../assets/images/orangeForest.jpg";
import Colors from "../../assets/Colors";
import { useNavigate } from "react-router-dom";

const TitleContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: normal;

  & > svg {
    font-size: 1.5rem;
    transition: margin 0.3s;
  }
`;
const Data = styled.span`
  color: ${Colors.Background};
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
`;

const BCItemEl = styled.div`
  border-radius: 10px;
  background-image: url(${bgImage});
  background-size: 100%;
  cursor: pointer;
  display: flex;
  padding: 100px 1rem 1rem 1rem;
  min-width: 300px;
  transition: background-size 0.4s;

  &:hover {
    background-size: 105%;

    & > ${Data} > ${TitleContainer} > svg {
      margin-right: 0.5rem;
    }
  }
`;

export default function BCItem() {
  const nav = useNavigate();
  return (
    <BCItemEl
      onClick={() => {
        nav("/info");
      }}
    >
      <Data>
        $50
        <TitleContainer>
          Best of Bali Waterfalls
          <BsArrowRight />
        </TitleContainer>
      </Data>
    </BCItemEl>
  );
}

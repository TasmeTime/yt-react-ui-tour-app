import styled from "styled-components";
import Colors from "../../assets/Colors";
import bgImage from "../../assets/images/winterForest.jpg";

const SCItemEl = styled.div`
  border-radius: 10px;
  background-image: url(${bgImage});
  background-size: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Background};
  font-size: 1.15rem;
  font-weight: 500;
  min-width: 200px;
  padding: 1rem 2rem;

  transition: background-size 0.4s;
  &:hover {
    background-size: 105%;
  }
`;

export default function SCItem({ title }) {
  return <SCItemEl>{title}</SCItemEl>;
}

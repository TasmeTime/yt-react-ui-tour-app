import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import Colors from "../assets/Colors";
import P from "./styled/P.styled";

const OverviewTabEl = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
export default function OverviewTab() {
  return (
    <OverviewTabEl>
      <Info>
        <span>
          <AiOutlineClockCircle fontSize="1.2rem" color={Colors.Primary} />8
          hours
        </span>
        <span>
          <BsGlobe fontSize="1.2rem" color={Colors.Primary} /> Offered in:
          English
        </span>
      </Info>
      <P noPre>
        Incididunt irure nisi aute sunt magna deserunt minim voluptate
        adipisicing. Non dolor et consectetur ex ad non duis proident eu minim
        culpa dolore. Voluptate aliquip sint deserunt dolore non quis velit ex
        eiusmod labore mollit elit enim labore. Nostrud qui fugiat ullamco
        excepteur cillum anim enim eiusmod labore eiusmod est duis. Sunt esse
        culpa irure culpa veniam ullamco aute dolore labore tempor laborum
        eiusmod cupidatat.
      </P>
    </OverviewTabEl>
  );
}

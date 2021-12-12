import styled from "styled-components";
import Button from "./styled/Button.styled";

const InfoBarEl = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;
const LeftTexts = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
`;
const LeftSubText = styled.span`
  font-size: 1rem;
  font-weight: normal;
`;

export default function InfoBar() {
  return (
    <InfoBarEl>
      <LeftTexts>
        $50
        <LeftSubText>per person</LeftSubText>
      </LeftTexts>
      <Button>Book now</Button>
    </InfoBarEl>
  );
}

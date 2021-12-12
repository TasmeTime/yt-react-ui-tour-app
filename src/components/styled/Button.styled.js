import styled from "styled-components";
import Colors, { Gradiants } from "../../assets/Colors";

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    ${Gradiants.Primary[0] + " ," + Gradiants.Primary[1]}
  );
  border: none;
  border-radius: 30px;
  cursor: pointer;
  flex: 1;
  color: ${Colors.Background};
  font-weight: 600;
  font-size: 1.1rem;
  min-height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export default Button;

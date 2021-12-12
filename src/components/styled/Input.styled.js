import styled from "styled-components";

const Input = styled.input`
  ${(p) => (p.color ? "color:" + p.color + ";" : "")}
  ${(p) => (p.fw ? "flex:1;" : "")}
  ${(p) => (p.noBorder ? "border:none;" : "")}
  ${(p) => (p.color ? `color:  ${p.color};` : "")}
  ${(p) => (p.fontSize ? `font-size: ${p.fontSize};` : "")}
  ${(p) => (p.fontWeight ? `font-weight: ${p.fontWeight};` : "")}

  &:focus {
    outline: none;
  }
`;

export default Input;

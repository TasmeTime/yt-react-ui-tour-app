import styled from "styled-components";

const H4 = styled.h4`
  ${(p) => (p.color ? `color:  ${p.color};` : "")}
  ${(p) => (p.fontSize ? `font-size: ${p.fontSize};` : "")}
  ${(p) => (p.fontWeight ? `font-weight: ${p.fontWeight};` : "")}
`;

export default H4;

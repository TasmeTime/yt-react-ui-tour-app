import styled from "styled-components";

const H2 = styled.h2`
  ${(p) => (p.color ? `color:  ${p.color};` : "")}
  ${(p) => (p.fontSize ? `font-size: ${p.fontSize};` : "")}
  ${(p) => (p.fontWeight ? `font-weight: ${p.fontWeight};` : "")}
`;

export default H2;

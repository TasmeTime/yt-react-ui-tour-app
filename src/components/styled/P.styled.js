import styled from "styled-components";

const P = styled.p`
  ${(p) => (p.color ? `color:  ${p.color};` : "")}
  ${(p) => (p.fontSize ? `font-size: ${p.fontSize};` : "")}
  ${(p) => (p.fontWeight ? `font-weight: ${p.fontWeight};` : "")}
  ${(p) => (p.textAlign ? `text-align: ${p.textAlign};` : "")}
  ${(p) => (p.noPre ? `white-space: ${p.noPre};` : "")}
`;

export default P;

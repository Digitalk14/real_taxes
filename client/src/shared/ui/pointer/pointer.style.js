import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  svg {
  }
  path {
    fill: none;
    stroke: white;
    stroke-width: 5px;
    vector-effect: non-scaling-stroke;
  }
`;

export const LineWrapper = styled.div`
  position: relative;
  height: 36px;
`;

export const SVG = styled.svg`
  position: absolute;
  left: 50%;
  transform: ${({ rotate }) =>
    rotate ? "scaleX(-1) translateX(100%)" : "scaleX(1)"};
`;

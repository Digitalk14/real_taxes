import React, { useEffect, useState } from "react";
import { Wrapper, LineWrapper, SVG } from "./pointer.style";

const POINT_POSITIONS = [
  {
    position: 380,
    revert: true,
  },
  {
    position: 130,
    revert: true,
  },
  {
    position: 130,
    revert: false,
  },
  {
    position: 380,
    revert: false,
  },
];

export const Pointer = ({ index }) => {
  const [svgWidth, setSwgWidth] = useState(POINT_POSITIONS[index].position);
  const rotate = POINT_POSITIONS[index].revert;
  const svgHeight = 36;
  useEffect(() => {
    setSwgWidth(POINT_POSITIONS[index].position);
  }, [index]);
  return (
    <Wrapper>
      <LineWrapper>
        <SVG
          width={svgWidth}
          height={svgHeight}
          rotate={rotate}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M2.1009 0.630683C2.10075 46.4998 ${svgWidth - 10} -2.51526 ${
              svgWidth - 10
            } 35.5`}
            stroke="white"
            strokeWidth="4"
          />
        </SVG>
      </LineWrapper>
    </Wrapper>
  );
};

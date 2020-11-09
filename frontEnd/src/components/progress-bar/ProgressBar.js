import React, {useEffect, useMemo, useRef} from 'react';
import styled from 'styled-components';
import progressHook from './progressHook';

const ProgressSVG = styled.svg`
  width: 100%;
  height: 10px;
`;

const TestWrapper = styled.div`
width:25%;
`;
const ProgressBar = ({open=1, close=2, color = 'green'}) => {
  const percentage = useMemo(() => {
    if((open+close)===0){
      return 0;
    }
    return (open / (open + close)) * 100;
  }, [open, close]);
  return (
    <>
      <ProgressSVG viewBox="0 0 100px 10px">
        <rect
          x="0"
          y="0"
          width="100%"
          height="10px"
          fill="#D6D6D6"
          rx="5px"
        ></rect>
        <rect
          x="0"
          y="0"
          width={`${percentage}%`}
          height="10px"
          fill={color}
          rx="5px"
        ></rect>
      </ProgressSVG>
    </>
  );
};

export default ProgressBar;

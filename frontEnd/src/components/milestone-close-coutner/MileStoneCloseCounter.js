import React from 'react';
import CheckSVG from '~/*/images/checkSVG';
const MileStoneCloseCounter = ({counter=0}) => {
  return <>
    <CheckSVG/>
    <span>
      {counter}
      Close
    </span>
  </>;
};

export default MileStoneCloseCounter;

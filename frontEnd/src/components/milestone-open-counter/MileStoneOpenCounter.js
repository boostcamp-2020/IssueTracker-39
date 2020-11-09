import React from 'react';
import Milestone from '~/*/images/milestone';
const MileStoneOpenCounter = ({counter=0}) => {
  return (
    <>
    <Milestone/>
      <span>
      {counter}
      Close
    </span>
    </>
  );
};

export default MileStoneOpenCounter;

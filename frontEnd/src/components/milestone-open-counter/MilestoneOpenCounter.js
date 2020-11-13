import React from 'react';
import Milestone from '~/*/images/milestone';
import styled from 'styled-components';
const LetterGap = styled.span`
  margin-right: 5px;
`;
const MileStoneOpenCounter = ({counter = 0}) => {
  return (
    <>
      <LetterGap>
        <Milestone />
      </LetterGap>
      <LetterGap>{counter}</LetterGap>
      <LetterGap>Open</LetterGap>
    </>
  );
};

export default MileStoneOpenCounter;

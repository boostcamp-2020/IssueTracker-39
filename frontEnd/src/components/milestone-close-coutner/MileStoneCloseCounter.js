import React from 'react';
import CheckSVG from '~/*/images/checkSVG';
import styled from 'styled-components';

const LetterGap = styled.span`
  margin-right: 5px;
`;
const MileStoneCloseCounter = ({counter = 0}) => {
  return (
    <>
      <LetterGap>
        <CheckSVG />
      </LetterGap>
      <LetterGap>{counter}</LetterGap>
      <LetterGap>Close</LetterGap>
    </>
  );
};

export default MileStoneCloseCounter;

import React from 'react';
import styled from 'styled-components';
import MileStoneHeader from '../milestone-header/MileStoneHeader';

const mileStoneWidth = '90%';
const Body = styled.main`
  box-sizing: border-box;
  width: ${mileStoneWidth};
  margin: 5% auto;
`;
const MileStoneBody = () => {
  return <Body>
    <MileStoneHeader/>
  </Body>;
};

export default MileStoneBody;
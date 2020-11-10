import React from 'react';
import styled from 'styled-components';
import MileStoneHeader from '../milestone-header/MilestoneHeader';
import MileStoneList from '../milestone-list/MilestoneList';

const HeaderWrapper = styled.div`

margin-bottom:50px;
`;

const mileStoneWidth = '90%';
const Body = styled.main`
  box-sizing: border-box;
  width: ${mileStoneWidth};
  margin: 5% auto;
`;
const MileStoneBody = () => {
  return (
    <Body>
      <HeaderWrapper>
        <MileStoneHeader />
      </HeaderWrapper>
      <MileStoneList />
    </Body>
  );
};

export default MileStoneBody;
